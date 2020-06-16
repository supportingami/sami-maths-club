import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProblemCardComponent } from './components/problem-card/problem-card.component';
import { ProblemsComponent } from './components/problems/problems.component';

@NgModule({
  declarations: [
    AppComponent,
    ProblemCardComponent,
    ProblemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
