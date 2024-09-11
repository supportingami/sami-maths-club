import { Routes } from "@angular/router";

import { PrivacyPolicyComponent } from "./components/privacy-policy/privacy-policy.component";
import { AppTermsComponent } from "./components/app-terms/app-terms.component";
import { ContactComponent } from "./components/contact/contact.component";

export const routes: Routes = [
  { path: "privacy", component: PrivacyPolicyComponent },
  { path: "app-terms", component: AppTermsComponent },
  { path: "contact", component: ContactComponent },
  {
    path: ":lang",
    loadComponent: () =>
      import("./components/problems-list/problems-list.component").then(
        (m) => m.ProblemsListComponent
      ),
    data: { animation: "left" },
  },
  {
    path: ":lang/:slug",
    loadComponent: () =>
      import("./components/problem-detail/problem-detail.component").then(
        (m) => m.ProblemDetailComponent
      ),
    data: { animation: "center" },
  },
  {
    path: ":lang/:slug/notes",
    loadComponent: () =>
      import("./components/facilitator-note/facilitator-note.component").then(
        (m) => m.FacilitatorNoteComponent
      ),
    data: { animation: "right" },
  },

  { path: "", redirectTo: "en", pathMatch: "full" },
];
