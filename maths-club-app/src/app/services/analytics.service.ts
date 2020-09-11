import { Injectable } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import "@capacitor-community/firebase-analytics";

import { Plugins } from "@capacitor/core";
const { FirebaseAnalytics } = Plugins;

@Injectable({
  providedIn: "root",
})
export class AnalyticsService {
  constructor(private router: Router) {}

  /**
   *  Initialise analytics to track route changes and share data
   *  Note - requires installation and initialisation of analytics sdk
   *  and google services json
   *  API - https://github.com/capacitor-community/firebase-analytics
   * NOTE - currently only enabled for native, but could be initialised for web
   */
  init() {
    // TODO - handle opt-in and out
    FirebaseAnalytics.setCollectionEnabled({
      enabled: true,
    });
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        FirebaseAnalytics.setScreenName({
          screenName: e.url,
        });
        FirebaseAnalytics.logEvent({
          name: "page_view",
          params: {
            url: e.url,
          },
        });
      }
    });
  }

  setUserID(id: string) {
    FirebaseAnalytics.setUserId({
      userId: id,
    });
  }
}
