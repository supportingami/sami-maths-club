import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";

@Injectable({
  providedIn: "root",
})
/**
 * Common service used throughout the app
 */
export class AppService {
  title$ = new BehaviorSubject<string>("SAMI Maths Club");
  routeParams$ = new BehaviorSubject<IRouteParams>({ lang: "en" });

  constructor(private router: Router, private route: ActivatedRoute) {
    this._subscribeToRouteChanges();
  }

  setMenubarTitle(title: string = "SAMI Maths Club") {
    this.title$.next(title);
  }

  /**
   * As the service sits outside the router-outlet, workaround to access
   * params that would otherwise only be passed down to children
   */
  private _subscribeToRouteChanges() {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        const params = this.route.root.firstChild.snapshot
          .params as IRouteParams;
        this.routeParams$.next(params);
        // set default title when not on a problem page
        if (!params.slug) {
          this.setMenubarTitle();
        }
      }
    });
  }
}
interface IRouteParams {
  lang: string;
  slug?: string;
}
