import { Component, ViewEncapsulation, OnInit } from "@angular/core";
import { AppService } from "./services/app.service";
import { RouterOutlet } from "@angular/router";
import { slideTransition } from "./animations";

import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from "@capacitor/core";

const { PushNotifications, Modals } = Plugins;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None,
  animations: [slideTransition],
})
export class AppComponent implements OnInit {
  constructor(public appService: AppService) {}
  getRouteAnimationState(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }

  ngOnInit() {
    console.log("Initiliaizng HomePage");

    PushNotifications.requestPermission().then((result) => {
      if (result.granted) {
        PushNotifications.register();
      }
    });

    PushNotifications.addListener(
      "registration",
      (token: PushNotificationToken) => {
        alert("Push registration success, token:" + token.value);
        console.log("Token Value", token.value);
      }
    );

    PushNotifications.addListener("registrationError", (error: any) => {
      alert("Error on registration: " + JSON.stringify(error));
    });

    PushNotifications.addListener(
      "pushNotificationReceived",
      (notification: PushNotification) => {
       // alert("Push received: " + JSON.stringify(notification));
       console.log("Push Received: ", notification);

       let alertRet = Modals.alert({
         title: notification.title,
         message: notification.body
       })
      }
    );

    PushNotifications.addListener(
      "pushNotificationActionPerformed",
      (notification: PushNotificationActionPerformed) => {
        alert("Push action performed: " + JSON.stringify(notification));
      }
    );
  }
}
