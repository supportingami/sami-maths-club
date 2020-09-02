import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { MarkdownModule } from "ngx-markdown";
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from "./app.component";
import { ProblemDetailComponent } from "./components/problem-detail/problem-detail.component";
import { ProblemsListComponent } from "./components/problems-list/problems-list.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MaterialModule } from "./material.module";
import { LanguageSwitcherComponent } from "./components/language-switcher/language-switcher.component";
import { FacilitatorNoteComponent } from "./components/facilitator-note/facilitator-note.component";
import { PrivacyPolicyComponent } from "./components/privacy-policy/privacy-policy.component";
import { AppTermsComponent } from "./components/app-terms/app-terms.component";
import * as Sentry from "@sentry/angular";
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ProblemDetailComponent,
    ProblemsListComponent,
    LanguageSwitcherComponent,
    FacilitatorNoteComponent,
    PrivacyPolicyComponent,
    ContactComponent,
    AppTermsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    BrowserAnimationsModule,

    FormsModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: false,
      }),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
