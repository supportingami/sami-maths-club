import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  signal,
} from "@angular/core";
import { ProblemService } from "src/app/services/problem.service";
import { fadeInOut } from "src/app/animations";
import { MarkdownModule } from "ngx-markdown";

@Component({
  selector: "app-facilitator-note",
  templateUrl: "./facilitator-note.component.html",
  styleUrls: ["./facilitator-note.component.scss"],
  encapsulation: ViewEncapsulation.None,
  animations: [fadeInOut({ delay: "100ms" })],
  standalone: true,
  imports: [MarkdownModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FacilitatorNoteComponent {
  markdownReady = signal(false);
  constructor(public problemService: ProblemService) {}

  onMarkdownReady() {
    if (!this.markdownReady()) {
      // hack - markdown ready seems to trigger twice
      this.markdownReady.set(true);
    }
  }
}
