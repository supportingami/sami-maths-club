import { Component, OnDestroy, OnInit } from "@angular/core";
import { ProblemService } from "../../services/problem.service";
import { fadeChildren } from "src/app/animations";
import * as Sentry from "@sentry/angular";
import { Plugins, Capacitor } from "@capacitor/core";
import { RouterLink } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
const { App } = Plugins;

@Component({
  selector: "app-problems",
  templateUrl: "./problems-list.component.html",
  styleUrls: ["./problems-list.component.scss"],
  animations: [fadeChildren],
  standalone: true,
  imports: [RouterLink, MatIconModule],
})
export class ProblemsListComponent implements OnInit, OnDestroy {
  constructor(public problemService: ProblemService) {}

  /**
   * Temporary function used for debugging automated tests
   */
  testClick(identifier: string) {
    Sentry.captureMessage(`[${identifier}] UI Test Interaction Recorded`);
  }

  ngOnInit() {
    if (Capacitor.isNative) {
      App.addListener("backButton", App.exitApp);
    }
  }

  ngOnDestroy() {
    if (Capacitor.isNative) {
      App.removeAllListeners();
    }
  }
}
