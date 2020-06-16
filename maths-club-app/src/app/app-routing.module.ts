import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProblemsComponent } from './components/problems/problems.component';
import { ProblemCardComponent } from './components/problem-card/problem-card.component';



const routes: Routes = [
  {path: '', component: ProblemsComponent},
  {path: 'p/:slug', component: ProblemCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
