import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { DOCUMENT } from "@angular/common";
import { ILanguageCode } from "./language.service";

@Injectable({
  providedIn: "root",
})
/**
 * Common service used throughout the app
 */
export class AppService {
  title$ = new BehaviorSubject<string>("SAMI Maths Club");
  routeParams$ = new BehaviorSubject<IRouteParams>({});

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document
  ) {
    this._processRouteChanges();
  }

  setMenubarTitle(title: string = "SAMI Maths Club") {
    this.title$.next(title);
  }

  goBack() {
    this.router.navigate([".."], { relativeTo: this.route, replaceUrl: true });
  }

  /**
   * As the service sits outside the router-outlet, workaround to access
   * params that would otherwise only be passed down to children
   * Additionally scroll to top of viewport
   */
  private _processRouteChanges() {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        // update activated route to reflect routed component tree
        this.route = this.route.root.firstChild;
        const params = this.route.root.firstChild.snapshot
          .params as IRouteParams;
        this.routeParams$.next(params);
        // set default title when not on a problem page
        if (!params.slug) {
          this.setMenubarTitle();
        }
        // scroll to top of sidenav-content on page
        this.document.querySelector(".mat-sidenav-content").scrollTop = 0;
      }
    });
  }
}
export interface IRouteParams {
  lang?: ILanguageCode;
  slug?: string;
}
