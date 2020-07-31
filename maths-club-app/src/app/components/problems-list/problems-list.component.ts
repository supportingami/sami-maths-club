import { Component } from "@angular/core";
import { ProblemService } from "../../services/problem.service";
import { fadeChildren } from "src/app/animations";

@Component({
  selector: "app-problems",
  templateUrl: "./problems-list.component.html",
  styleUrls: ["./problems-list.component.scss"],
  animations: [fadeChildren],
})
export class ProblemsListComponent {
  constructor(public problemService: ProblemService) {}
}
