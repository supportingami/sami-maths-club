import { Component } from "@angular/core";
import { ALL_PROBLEMS } from "src/assets/maths-club-pack/ProblemsList";

@Component({
  selector: "app-problems",
  templateUrl: "./problems-list.component.html",
  styleUrls: ["./problems-list.component.scss"],
})
export class ProblemsListComponent {
  problems = ALL_PROBLEMS;
}
