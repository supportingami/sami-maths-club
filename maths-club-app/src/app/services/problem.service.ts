import { computed, effect, Injectable, signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { HttpClient } from "@angular/common/http";
import { IProblemMeta, IProblem } from "../models/problem.models";
import { Router, ActivatedRoute } from "@angular/router";
import * as Sentry from "@sentry/angular";
import { WEEKLY_PROBLEMS } from "../data/weeklyProblems";
import { ILanguageCode } from "./language.service";
import { AppService, IRouteParams } from "./app.service";
import { firstValueFrom } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProblemService {
  public problems = signal<IProblemMeta[]>([]);
  public activeProblem = signal<IProblem | undefined>(undefined);

  private routeParams = toSignal(this.appService.routeParams$);

  private _lang: ILanguageCode;
  private _slug: string;

  constructor(
    private http: HttpClient,
    private appService: AppService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    effect(
      async () => {
        const params = this.routeParams();
        await this.handleRouteParamChange(params);
      },
      { allowSignalWrites: true }
    );
  }

  private async handleRouteParamChange({ lang, slug }: IRouteParams) {
    // if language changed reload all problems and active
    if (lang !== this._lang) {
      await this.getProblemList(lang);
      await this.setActiveProblem(this._slug, lang);
      this._lang = lang;
    }
    // if slug changed load problem
    if (slug !== this._slug) {
      await this.setActiveProblem(slug, lang);
      this._slug = slug;
    }
  }

  /**
   * Go through the list of featured problems and select problem selected for
   * the current week (finds problem for next week and returns one previous)
   * Return as the index of the problems passed
   */
  private getFeaturedProblem(problems: IProblemMeta[]): { index: number } {
    const today = this._formatDateAsString(new Date());
    const index = Object.keys(WEEKLY_PROBLEMS).findIndex((d) => today < d) - 1;
    const weeklySlug = Object.values(WEEKLY_PROBLEMS)[index];
    // TODO - if problem doesn't exist pick a suitable replacement
    if (index < 0) {
      Sentry.captureMessage("Unable to load weekly problem", {
        extra: { index, date: new Date(), today, WEEKLY_PROBLEMS },
      });
    }
    return { index: problems.findIndex((p) => p.slug === weeklySlug) };
  }

  /**
   * Read the list of problems from the metadata.json file for the current language
   * and emit only those with student versions for subscription
   */
  private async getProblemList(language: ILanguageCode) {
    // notify that the problems are not yet loaded
    this.problems.set([]);
    const url = `/assets/maths-club-pack/${language}/metadata.json`;
    let problems = await firstValueFrom(this.http.get<IProblemMeta[]>(url))
      // redirect if language metadata not available
      .catch(() => {
        this.router.navigate(["/"]);
        return [];
      });
    const { index } = this.getFeaturedProblem(problems);
    if (index !== -1) {
      problems[index] = { ...problems[index], featured: true };
    }
    // filter out problems which do not have a student and facilitator version and emit
    problems = problems
      .filter((p) => p.hasFacilitatorVersion && p.hasStudentVersion)
      .sort((a, b) => {
        return a.featured ? -1 : b.featured ? 1 : a.added > b.added ? -1 : 1;
      });
    // allow time to finish any previous animations
    this.problems.set(problems);
  }

  // Update the current active problem by slug
  private async setActiveProblem(slug: string, language: ILanguageCode) {
    // unset any previous problem while loading new
    this.activeProblem.set(undefined);
    if (!slug) return;

    // problem changed, load student and facilitator version
    const meta = this.problems().find((p) => p.slug === slug);
    try {
      const studentVersionText = await this.readProblemMD(
        slug,
        "student",
        language
      );
      const facilitatorVersionText = await this.readProblemMD(
        slug,
        "facilitator",
        language
      );
      this.activeProblem.set({
        ...meta,
        studentVersionText,
        facilitatorVersionText,
      });
      this.appService.setMenubarTitle(meta.title);
    } catch (error) {
      // if problem does not exist, redirect back to language home
      this.router.navigate(["/", language], { relativeTo: this.route });
    }
  }

  private async readProblemMD(
    slug: string,
    version: "facilitator" | "student",
    language: ILanguageCode
  ) {
    const url = `/assets/maths-club-pack/${language}/${version}/${slug}.md`;
    const res = await this.http.get(url, { responseType: "text" }).toPromise();
    return this.rewriteImageUrls(res);
  }

  /**
   * Takes a date object and returns in format yyyy-mm-dd
   * Similar to .toIsoString slice, but retains local timezone
   */
  private _formatDateAsString(d = new Date()) {
    return (
      d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate())
    );
    function pad(n) {
      return n < 10 ? "0" + n : n;
    }
  }

  private rewriteImageUrls(problemText: string) {
    return problemText.replace(
      /\.\.\/\.\.\/images/g,
      "assets/maths-club-pack/images"
    );
  }
}
