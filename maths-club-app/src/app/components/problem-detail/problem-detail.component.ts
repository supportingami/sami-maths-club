import { Component, ViewEncapsulation, ChangeDetectorRef } from "@angular/core";
import { ProblemService } from "src/app/services/problem.service";
import { fadeInOut } from "src/app/animations";

@Component({
  selector: "app-problem-detail",
  templateUrl: "./problem-detail.component.html",
  styleUrls: ["./problem-detail.component.scss"],
  encapsulation: ViewEncapsulation.None,
  animations: [fadeInOut],
})
export class ProblemDetailComponent {
  markdownReady = false;
  constructor(
    public problemService: ProblemService,
    private cdr: ChangeDetectorRef
  ) {}

  onMarkdownReady() {
    this.markdownReady = true;
    this.cdr.detectChanges();
  }
}
