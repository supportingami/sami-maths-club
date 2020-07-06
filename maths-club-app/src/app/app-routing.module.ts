import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProblemsListComponent } from "./components/problems-list/problems-list.component";
import { ProblemCardComponent } from "./components/problem-card/problem-card.component";

const routes: Routes = [
  { path: "", component: ProblemsListComponent },
  { path: "p/:slug", component: ProblemCardComponent },
  { path: "p/:lang/:slug", component: ProblemCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
