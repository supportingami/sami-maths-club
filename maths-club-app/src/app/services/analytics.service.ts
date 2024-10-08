import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { NavigationEnd, Router } from "@angular/router";
import { FirebaseAnalytics } from "@capacitor-firebase/analytics";
import { Capacitor } from "@capacitor/core";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { environment } from "src/environments/environment";
import { AnalyticsConsentComponent } from "../components/analytics-consent";

@Injectable({
  providedIn: "root",
})
export class AnalyticsService {
  constructor(private router: Router, private dialog: MatDialog) {}

  /**
   *  Initialise analytics to track route changes and share data
   *  Note - requires installation and initialisation of analytics sdk
   *  and google services json
   */
  async init() {
    const consented = await this.verifyUserAnalyticsConsent();
    if (consented) {
      // Only register analytics on web if production settings set
      if (Capacitor.getPlatform() === "web") {
        if (environment.FIREBASE_CONFIG) {
          const app = initializeApp(environment.FIREBASE_CONFIG);
          const analytics = getAnalytics(app);
          this._subscribeToRouteChanges();
        } else {
          console.info("No analytics settings configured, skipping");
        }
      } else {
        this._subscribeToRouteChanges();
      }
    }
  }
  async verifyUserAnalyticsConsent(): Promise<boolean> {
    return new Promise(async (resolve) => {
      const userConsented = localStorage.getItem("analytics_user_consented");
      if (userConsented || this.isBot(navigator.userAgent)) {
        resolve(userConsented === "true" ? true : false);
      } else {
        const dialog = this.dialog.open(AnalyticsConsentComponent, {
          width: "350px",
          disableClose: true,
          autoFocus: false,
        });
        dialog.afterClosed().subscribe((consented: boolean) => {
          // persist opt-in (currently only opt-out for ci testing)
          if (consented) {
            localStorage.setItem("analytics_user_consented", `${consented}`);
          }
          resolve(consented);
        });
      }
    });
  }
  private isBot = (userAgent: string = "") => {
    // match most common bots, e.g. googlebot
    return /bot|baiduspider|facebookexternalhit|crawler|spider|crawling|metainspector|whatsapp|insomnia|slurp|lighthouse/i.test(
      userAgent
    );
  };

  private _subscribeToRouteChanges() {
    console.info("Analytics enabled");
    this.router.events.subscribe(async (e) => {
      if (e instanceof NavigationEnd) {
        FirebaseAnalytics.setCurrentScreen({
          screenName: e.url,
          screenClassOverride: null,
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
