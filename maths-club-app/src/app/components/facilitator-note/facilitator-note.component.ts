import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ProblemService } from "../../services/problem.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-facilitator-note",
  templateUrl: "./facilitator-note.component.html",
  styleUrls: ["./facilitator-note.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class FacilitatorNoteComponent implements OnInit {
  noteText: string;
  constructor(
    private problemService: ProblemService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    const slug = this.route.snapshot.params.slug;
    this.noteText = await this.problemService.getProblem(slug, "facilitator");
  }
}
