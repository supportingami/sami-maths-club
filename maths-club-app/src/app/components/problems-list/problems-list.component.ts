import { Component } from "@angular/core";
import { ProblemService } from "../../services/problem.service";

@Component({
  selector: "app-problems",
  templateUrl: "./problems-list.component.html",
  styleUrls: ["./problems-list.component.scss"],
})
export class ProblemsListComponent {
  constructor(public problemService: ProblemService) {}
}
