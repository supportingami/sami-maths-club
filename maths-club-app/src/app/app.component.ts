import { Component, ViewEncapsulation } from "@angular/core";
import { AppService } from "./services/app.service";
import { RouterOutlet } from "@angular/router";
import { slideTransition } from "./animations";

import { environment } from "src/environments/environment";
import { NotificationService } from "./services/notification.service";

import { Plugins, Capacitor, StatusBarStyle } from "@capacitor/core";
import { AnalyticsService } from "./services/analytics.service";
import { SeoService } from "./services/seo.service";
const { StatusBar } = Plugins;

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
    seo: SeoService
  ) {
    // this.notifications.init()
    analytics.init();
    if (Capacitor.isNative) {
      // Light text for dark backgrounds.

      StatusBar.setStyle({ style: StatusBarStyle.Dark });
    } else {
      seo.init();
    }
  }
  getRouteAnimationState(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }
}
