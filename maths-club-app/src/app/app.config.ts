import {
  ApplicationConfig,
  ErrorHandler,
  provideZoneChangeDetection,
} from "@angular/core";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideRouter } from "@angular/router";

import { provideMarkdown } from "ngx-markdown";

import { routes } from "./app.routes";
import { provideHttpClient } from "@angular/common/http";
import { createErrorHandler } from "@sentry/angular";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    provideRouter(routes),
    provideMarkdown(),
    provideHttpClient(),
    {
      provide: ErrorHandler,
      useValue: createErrorHandler({
        showDialog: false,
      }),
    },
  ],
};
