import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
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
import { FacilitatorNoteComponent } from './components/facilitator-note/facilitator-note.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    ProblemDetailComponent,
    ProblemsListComponent,
    LanguageSwitcherComponent,
    FacilitatorNoteComponent,
    PrivacyPolicyComponent,
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
