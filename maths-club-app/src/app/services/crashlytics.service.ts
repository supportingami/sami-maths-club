import { Injectable } from "@angular/core";
import { Capacitor } from "@capacitor/core";
import { Device } from "@capacitor/device";
import {
  FirebaseCrashlytics,
  RecordExceptionOptions,
} from "@capacitor-firebase/crashlytics";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
/**
 * Automates reporting of crash data to firebase crashlytics, and adds methods
 * to allow custom reporting for non-fatal exceptions (e.g. error messages)
 * https://github.com/capacitor-community/firebase-crashlytics
 */
export class CrashlyticsService {
  /** Service will only be enabled in production on native device (not supported on web) */
  private enabled = Capacitor.isNativePlatform() && environment.production;

  public async init() {
    if (this.enabled) {
      const {
        setEnabled,
        setUserId,
        sendUnsentReports,
        setCustomKey,
      } = FirebaseCrashlytics;
      await setEnabled({ enabled: true });
      const { identifier: uuid } = await Device.getId();
      await setUserId({ userId: uuid });
      // populate webview useragent info
      const { webViewVersion } = await Device.getInfo();
      await setCustomKey({
        key: "userAgent",
        type: "string",
        value: navigator.userAgent || "",
      });
      await setCustomKey({
        key: "webViewVersion",
        type: "string",
        value: webViewVersion || "",
      });
      await setCustomKey({
        key: "pathname",
        type: "string",
        value: location.pathname || "",
      });
      sendUnsentReports();
    } else {
      this.loadDummyMethods();
    }
  }

  public recordException = FirebaseCrashlytics.recordException;

  /** When using on unsupported device fill dummy methods for interoperability */
  private loadDummyMethods() {
    this.recordException = async (options: RecordExceptionOptions) => {
      console.warn("[Crashlytics] skipping report", options);
    };
  }

  private crash = FirebaseCrashlytics.crash;
}
