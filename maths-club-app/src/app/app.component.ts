import { Component, NgZone, ViewEncapsulation } from "@angular/core";
import { AppService } from "./services/app.service";
import { Router, RouterOutlet } from "@angular/router";
import { slideTransition } from "./animations";

import { environment } from "src/environments/environment";
import { NotificationService } from "./services/notification.service";

import { Plugins, Capacitor, StatusBarStyle } from "@capacitor/core";
import { AnalyticsService } from "./services/analytics.service";
import { SeoService } from "./services/seo.service";
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
    private router: Router
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
    }
    //exit on back
    this.exitOnBack();
  }
  getRouteAnimationState(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }
  private configureDeepLinks() {
    App.addListener("appUrlOpen", (data: any) => {
      console.log("deeplink appUrlOpen", data);
      this.zone.run(() => {
        const slug = data.url.replace(
          "https://mathsclub.samicharity.co.uk/",
          ""
        );
        console.log("navigating to slug", slug);
        if (slug) {
          this.router.navigateByUrl(slug);
        }
      });
    });
  }
  exitOnBack(){
    if(Capacitor.isNative){
      App.addListener('backButton', App.exitApp)
    }
  }
}
