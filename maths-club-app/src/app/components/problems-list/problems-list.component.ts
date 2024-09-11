import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { ProblemService } from "../../services/problem.service";
import { fadeChildren } from "src/app/animations";
import * as Sentry from "@sentry/angular";
import { Capacitor } from "@capacitor/core";
import { App } from "@capacitor/app";
import { RouterLink } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-problems",
  templateUrl: "./problems-list.component.html",
  styleUrls: ["./problems-list.component.scss"],
  animations: [fadeChildren(".problem-card")],
  standalone: true,
  imports: [RouterLink, MatIconModule, MatCardModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    if (Capacitor.isNativePlatform()) {
      App.addListener("backButton", App.exitApp);
    }
  }

  ngOnDestroy() {
    if (Capacitor.isNativePlatform) {
      App.removeAllListeners();
    }
  }
}
