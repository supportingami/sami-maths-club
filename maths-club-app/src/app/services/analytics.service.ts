import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { NavigationEnd, Router } from "@angular/router";
import "@capacitor-community/firebase-analytics";
import { FirebaseAnalyticsWeb } from "@capacitor-community/firebase-analytics";

import { Plugins, Capacitor } from "@capacitor/core";
import { environment } from "src/environments/environment";
import { AnalyticsConsentComponent } from "../components/analytics-consent";
const { FirebaseAnalytics } = Plugins;
const Analytics = FirebaseAnalytics as FirebaseAnalyticsWeb;

@Injectable({
  providedIn: "root",
})
export class AnalyticsService {
  constructor(private router: Router, private dialog: MatDialog) {}

  /**
   *  Initialise analytics to track route changes and share data
   *  Note - requires installation and initialisation of analytics sdk
   *  and google services json
   *  API - https://github.com/capacitor-community/firebase-analytics
   * NOTE - currently only enabled for native, but could be initialised for web
   */
  async init() {
    let consented: boolean;
    if (Capacitor.platform === "web") {
      if (environment.FIREBASE_CONFIG) {
        await Analytics.initializeFirebase(environment.FIREBASE_CONFIG);
        consented = await this.verifyUserAnalyticsConsent();
      }
    } else {
      consented = await this.verifyUserAnalyticsConsent();
    }
    if (consented) {
      console.log("consented to analytics");
      this._subscribeToRouteChanges();
    }
  }
  async verifyUserAnalyticsConsent(): Promise<boolean> {
    return new Promise(async (resolve) => {
      const userConsented = localStorage.getItem("analytics_user_consented");
      if (userConsented) {
        resolve(true);
      } else {
        const dialog = this.dialog.open(AnalyticsConsentComponent, {
          width: "350px",
          disableClose: true,
          autoFocus: false,
        });
        dialog.afterClosed().subscribe((consented) => {
          localStorage.setItem("analytics_user_consented", consented);
          resolve(Boolean(consented));
        });
      }
    });
  }

  private _subscribeToRouteChanges() {
    this.router.events.subscribe(async (e) => {
      if (e instanceof NavigationEnd) {
        Analytics.setScreenName({
          screenName: e.url,
          nameOverride: null,
        });
        Analytics.logEvent({
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
