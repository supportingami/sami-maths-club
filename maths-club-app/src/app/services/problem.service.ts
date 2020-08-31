import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { IProblemMeta, IProblem } from "../models/problem.models";
import { AppService } from "./app.service";
import { Router, ActivatedRoute } from "@angular/router";
import startOfWeek from "date-fns/startOfWeek";
import * as Sentry from "@sentry/angular";
import { WEEKLY_PROBLEMS } from "../data/weeklyProblems";

@Injectable({
  providedIn: "root",
})
export class ProblemService {
  public problems$ = new BehaviorSubject<IProblemMeta[]>(undefined);
  public activeProblem$ = new BehaviorSubject<IProblem>(undefined);

  constructor(
    private http: HttpClient,
    private appService: AppService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.init();
  }

  get language() {
    return this.appService.routeParams$.value.lang;
  }
  get slug() {
    return this.appService.routeParams$.value.slug;
  }

  private async init() {
    await this.getProblemList();
    this._subscribeToRouteChanges();
  }

  private getFeaturedProblem(
    problems: IProblemMeta[]
  ): { index: number; featured: IProblemMeta } {
    // set hour to avoid confusion with midnight day
    const today = new Date().setHours(9);
    const problemWeek = startOfWeek(today).toISOString().substring(0, 10);
    const weeklyProblemSlug = WEEKLY_PROBLEMS[problemWeek];
    const index = problems.findIndex((p) => p.slug === weeklyProblemSlug);
    // TODO - if problem doesn't exist pick a suitable replacement
    if (index === -1) {
      Sentry.captureMessage("Unable to load weekly problem", {
        extra: { problems, problemWeek, WEEKLY_PROBLEMS },
      });
    }
    return { index, featured: problems[index] };
  }

  /**
   * Read the list of problems from the metadata.json file for the current language
   * and emit only those with student versions for subscription
   */
  private async getProblemList() {
    // notify that the problems are not yet loaded
    this.problems$.next(undefined);
    const url = `/assets/maths-club-pack/${this.language}/metadata.json`;
    let problems = await this.http.get<IProblemMeta[]>(url).toPromise();
    const { index } = this.getFeaturedProblem(problems);
    if (index !== -1) {
      problems[index] = { ...problems[index], featured: true };
    }
    problems = problems
      .filter((p) => p.hasFacilitatorVersion && p.hasStudentVersion)
      .sort((a, b) => (a.featured ? -1 : a.added > b.added ? -1 : 1));
    // filter out problems which do not have a student and facilitator version and emit
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
      await this.getProblemList();
      if (this.slug) {
        await this.setActiveProblem(this.slug);
      }
    });
  }

  private rewriteImageUrls(problemText: string) {
    return problemText.replace(
      /\.\.\/\.\.\/images/g,
      "assets/maths-club-pack/images"
    );
  }
}
