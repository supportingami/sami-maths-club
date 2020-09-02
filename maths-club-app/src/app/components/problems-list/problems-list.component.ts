import { Component } from "@angular/core";
import { ProblemService } from "../../services/problem.service";
import { fadeChildren } from "src/app/animations";
import * as Sentry from "@sentry/angular";

@Component({
  selector: "app-problems",
  templateUrl: "./problems-list.component.html",
  styleUrls: ["./problems-list.component.scss"],
  animations: [fadeChildren],
})
export class ProblemsListComponent {
  constructor(public problemService: ProblemService) {}

  /**
   * Temporary function used for debugging automated tests
   */
  testClick(identifier: string) {
    Sentry.captureMessage(`[${identifier}] UI Test Interaction Recorded`);
  }
}
