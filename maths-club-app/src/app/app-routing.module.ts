import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProblemsListComponent } from "./components/problems-list/problems-list.component";
import { ProblemCardComponent } from "./components/problem-card/problem-card.component";

const routes: Routes = [
  { path: ":lang", component: ProblemsListComponent },
  { path: ":lang/:slug", component: ProblemCardComponent },
  { path: "", redirectTo: "en", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
