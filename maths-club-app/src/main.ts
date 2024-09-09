import { enableProdMode } from "@angular/core";

import { environment } from "./environments/environment";

import * as Sentry from "@sentry/angular";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { appConfig } from "./app/app.config";

if (environment.production) {
  enableProdMode();
  Sentry.init({
    dsn:
      "https://42bfde52d006481a8ccb51e308937929@o157757.ingest.sentry.io/5411348",
    integrations: [],
  });
}

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
