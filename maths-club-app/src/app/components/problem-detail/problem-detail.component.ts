import { Component, ViewEncapsulation } from "@angular/core";
import { ProblemService } from "../../services/problem.service";
@Component({
  selector: "app-problem-detail",
  templateUrl: "./problem-detail.component.html",
  styleUrls: ["./problem-detail.component.scss"],
  encapsulation: ViewEncapsulation.None,
  
})
export class ProblemDetailComponent {
  constructor(public problemService: ProblemService) {}
}
