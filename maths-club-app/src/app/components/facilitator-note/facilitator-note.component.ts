import { Component, ViewEncapsulation, ChangeDetectorRef } from "@angular/core";
import { ProblemService } from "src/app/services/problem.service";
import { fadeInOut } from "src/app/animations";
import { MarkdownModule } from "ngx-markdown";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: "app-facilitator-note",
  templateUrl: "./facilitator-note.component.html",
  styleUrls: ["./facilitator-note.component.scss"],
  encapsulation: ViewEncapsulation.None,
  animations: [fadeInOut],
  standalone: true,
  imports: [AsyncPipe, MarkdownModule],
})
export class FacilitatorNoteComponent {
  markdownReady = false;
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
}
