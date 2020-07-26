import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { IProblemMeta, IProblem } from "../models/problem.models";
import { AppService } from "./app.service";
import { Router, ActivatedRoute } from "@angular/router";

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
    await this.listProblems();
    this._subscribeToRouteChanges();
  }

  private _subscribeToRouteChanges() {
    this.appService.routeParams$.subscribe(async () => {
      await this.listProblems();
      if (this.slug) {
        await this.setActiveProblem(this.slug);
      }
    });
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
    return res;
  }

  /**
   * Read the list of problems from the metadata.json file for the current language
   * and emit only those with student versions for subscription
   */
  public async listProblems() {
    // notify that the problems are not yet loaded
    this.problems$.next(undefined);
    const url = `/assets/maths-club-pack/${this.language}/metadata.json`;
    const problems = await this.http.get<IProblemMeta[]>(url).toPromise();
    // filter out problems which do not have a student and facilitator version and emit
    this.problems$.next(
      problems.filter((p) => p.hasFacilitatorVersion && p.hasStudentVersion)
    );
  }
}
