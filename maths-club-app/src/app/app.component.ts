import { Component, ViewEncapsulation } from "@angular/core";
import { AppService } from "./services/app.service";
import { RouterOutlet } from "@angular/router";
import { slideTransition } from "./animations";

import { environment } from "src/environments/environment";
import { NotificationService } from "./services/notification.service";

import { Plugins, Capacitor } from "@capacitor/core";
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
    public notifications: NotificationService
  ) {
    // this.notifications.init()
    if (Capacitor.isNative) {
      StatusBar.setOverlaysWebView({
        overlay: true,
      });
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
