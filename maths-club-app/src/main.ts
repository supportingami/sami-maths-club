import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

import * as Sentry from "@sentry/angular";

if (environment.production) {
  enableProdMode();
  Sentry.init({
    dsn:
      "https://42bfde52d006481a8ccb51e308937929@o157757.ingest.sentry.io/5411348",
    integrations: [],
  });
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
