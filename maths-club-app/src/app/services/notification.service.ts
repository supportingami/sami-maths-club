import { Injectable } from "@angular/core";
import { Token, PushNotifications } from "@capacitor/push-notifications";
import { Dialog } from "@capacitor/dialog";

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  constructor() {}

  init() {
    PushNotifications.requestPermissions().then((result) => {
      if (result.receive === "granted") {
        PushNotifications.register();
      }
    });

    PushNotifications.addListener("registration", (token: Token) => {
      alert("Push registration success, token:" + token.value);
      console.log("Token Value", token.value);
    });

    PushNotifications.addListener("registrationError", (error: any) => {
      alert("Error on registration: " + JSON.stringify(error));
    });

    PushNotifications.addListener(
      "pushNotificationReceived",
      (notification) => {
        // alert("Push received: " + JSON.stringify(notification));
        console.log("Push Received: ", notification);

        let alertRet = Dialog.alert({
          title: notification.title,
          message: notification.body,
        });
      }
    );

    PushNotifications.addListener(
      "pushNotificationActionPerformed",
      (notification) => {
        alert("Push action performed: " + JSON.stringify(notification));
      }
    );
  }
}
