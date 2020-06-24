import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { MarkdownModule } from "ngx-markdown";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ProblemCardComponent } from "./components/problem-card/problem-card.component";
import { ProblemsListComponent } from "./components/problems-list/problems-list.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MaterialModule } from "./material.module";

@NgModule({
  declarations: [AppComponent, ProblemCardComponent, ProblemsListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    BrowserAnimationsModule,

    FormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
