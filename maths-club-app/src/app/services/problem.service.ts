import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { IProblemMeta, IProblem } from "../models/problem.models";
import { Router, ActivatedRoute } from "@angular/router";
import * as Sentry from "@sentry/angular";
import { WEEKLY_PROBLEMS } from "../data/weeklyProblems";
import { LanguageService } from "./language.service";
import { AppService } from "./app.service";

@Injectable({
  providedIn: "root",
})
export class ProblemService {
  public problems$ = new BehaviorSubject<IProblemMeta[]>(undefined);
  public activeProblem$ = new BehaviorSubject<IProblem>(undefined);

  constructor(
    private http: HttpClient,
    private languageService: LanguageService,
    private appService: AppService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.init();
  }

  get language() {
    return this.languageService.activeLanguage;
  }
  get slug() {
    return this.appService.routeParams$.value.slug;
  }

  private async init() {
    await this.getProblemList();
    this._subscribeToRouteChanges();
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
  private async getProblemList() {
    // notify that the problems are not yet loaded
    this.problems$.next(undefined);
    const url = `/assets/maths-club-pack/${this.language}/metadata.json`;
    let problems = await this.http
      .get<IProblemMeta[]>(url)
      .toPromise()
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
    this.problems$.next(problems);
  }

  // Update the current active problem by slug
  private async setActiveProblem(slug: string) {
    this.activeProblem$.next(undefined);
    const meta = this.problems$.value.find((p) => p.slug === slug);
    try {
      const studentVersionText = await this.readProblemMD(slug, "student");
      const facilitatorVersionText = await this.readProblemMD(
        slug,
        "facilitator"
      );
      this.activeProblem$.next({
        ...meta,
        studentVersionText,
        facilitatorVersionText,
      });
      this.appService.setMenubarTitle(meta.title);
    } catch (error) {
      // if problem does not exist, redirect back to language home
      this.router.navigate(["/", this.language], { relativeTo: this.route });
    }
  }

  private async readProblemMD(
    slug: string,
    version: "facilitator" | "student"
  ) {
    const url = `/assets/maths-club-pack/${this.language}/${version}/${slug}.md`;
    const res = await this.http.get(url, { responseType: "text" }).toPromise();
    return this.rewriteImageUrls(res);
  }

  private _subscribeToRouteChanges() {
    this.appService.routeParams$.subscribe(async () => {
      if (this.language) {
        await this.getProblemList();
      }
      if (this.slug) {
        await this.setActiveProblem(this.slug);
      } else {
        this.activeProblem$.next(undefined);
      }
    });
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
