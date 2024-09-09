import { Component, NgZone, ViewEncapsulation } from "@angular/core";
import { AppService } from "./services/app.service";
import { Router, RouterOutlet } from "@angular/router";
import { slideTransition } from "./animations";

import { environment } from "src/environments/environment";
import { NotificationService } from "./services/notification.service";

import { Plugins, Capacitor, StatusBarStyle } from "@capacitor/core";
import { AnalyticsService } from "./services/analytics.service";
import { SeoService } from "./services/seo.service";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { AppOpenTargetComponent } from "./components/app-open-target";
const { StatusBar, App } = Plugins;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None,
  animations: [slideTransition],
})
export class AppComponent {
  version = environment.APP_VERSION;
  constructor(
    public appService: AppService,
    notifications: NotificationService,
    analytics: AnalyticsService,
    seo: SeoService,
    private zone: NgZone,
    private router: Router,
    private _bottomSheet: MatBottomSheet
  ) {
    // this.notifications.init()
    analytics.init();
    if (Capacitor.isNative) {
      // Light text for dark backgrounds.
      StatusBar.setStyle({ style: StatusBarStyle.Dark });
      this.configureDeepLinks();
    } else {
      // SEO only relevant whe not native
      seo.init();
      this.toggleAppOpenTargetSheet();
    }
  }
  getRouteAnimationState(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }
  /**
   * Present a bottom sheet to encourage user to use native version of app if running
   * on mobile
   */
  private toggleAppOpenTargetSheet() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    if (isMobile && !Capacitor.isNative) {
      this._bottomSheet.open(AppOpenTargetComponent);
    }
  }
  private configureDeepLinks() {
    App.addListener("appUrlOpen", (data: any) => {
      this.zone.run(() => {
        const slug = data.url.replace(
          "https://mathsclub.samicharity.co.uk/",
          ""
        );
        if (slug) {
          this.router.navigateByUrl(slug);
        }
      });
    });
  }
}
