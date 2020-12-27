import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProblemsListComponent } from "./components/problems-list/problems-list.component";
import { ProblemDetailComponent } from "./components/problem-detail/problem-detail.component";
import { FacilitatorNoteComponent } from "./components/facilitator-note/facilitator-note.component";
import { PrivacyPolicyComponent } from "./components/privacy-policy/privacy-policy.component";
import { AppTermsComponent } from "./components/app-terms/app-terms.component";
import { ContactComponent } from "./components/contact/contact.component";

const routes: Routes = [
  { path: "privacy", component: PrivacyPolicyComponent },
  { path: "app-terms", component: AppTermsComponent },
  { path: "contact", component: ContactComponent },
  {
    path: ":lang",
    component: ProblemsListComponent,
    data: { animation: "left" },
  },
  {
    path: ":lang/:slug",
    component: ProblemDetailComponent,
    data: { animation: "center" },
  },
  {
    path: ":lang/:slug/notes",
    component: FacilitatorNoteComponent,
    data: { animation: "right" },
  },

  { path: "", redirectTo: "en", pathMatch: "full" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled", relativeLinkResolution: 'legacy' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
