import {
  Component,
  ViewEncapsulation,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from "@angular/core";
import { ProblemService } from "src/app/services/problem.service";
import { fadeInOut } from "src/app/animations";
import { Capacitor } from "@capacitor/core";
import { Share } from "@capacitor/share";
import { MarkdownModule } from "ngx-markdown";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-problem-detail",
  templateUrl: "./problem-detail.component.html",
  styleUrls: ["./problem-detail.component.scss"],
  encapsulation: ViewEncapsulation.None,
  animations: [fadeInOut({})],
  standalone: true,
  imports: [MarkdownModule, MatIconModule, RouterLink, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProblemDetailComponent {
  markdownReady = false;
  isNative = Capacitor.isNativePlatform();

  constructor(
    public problemService: ProblemService,
    private cdr: ChangeDetectorRef
  ) {}

  onMarkdownReady() {
    this.markdownReady = true;
    // as markdown can be ready before page fully initialised complete manually trigger
    // change detection to avoid change detection errors
    this.cdr.detectChanges();
  }

  async share() {
    await Share.share({
      title: this.problemService.activeProblem().title,
      text:
        "Here's a problem for you to try! If you get stuck there are also notes for facilitators included",
      url: `https://mathsclub.samicharity.co.uk${location.pathname}`,
      dialogTitle: "Share",
    })
      .then((success) => {
        console.log("shared", success);
      })
      .catch((err) => {
        console.log("an error occureed", err);
      });
  }
}
