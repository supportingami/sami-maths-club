import { Component, ViewEncapsulation } from "@angular/core";
import { ProblemService } from "../../services/problem.service";

@Component({
  selector: "app-facilitator-note",
  templateUrl: "./facilitator-note.component.html",
  styleUrls: ["./facilitator-note.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class FacilitatorNoteComponent {
  constructor(public problemService: ProblemService) {}
}
