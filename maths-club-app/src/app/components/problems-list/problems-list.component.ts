import { Component, OnInit } from "@angular/core";
import { ALL_PROBLEMS } from "src/assets/maths-club-pack/ProblemsList";
import { ProblemService } from "../../services/problem.service";

@Component({
  selector: "app-problems",
  templateUrl: "./problems-list.component.html",
  styleUrls: ["./problems-list.component.scss"],
})
export class ProblemsListComponent implements OnInit {
  problems = ALL_PROBLEMS;
  language: string;

  constructor(private problemService: ProblemService) {}
  ngOnInit() {
    this.language = this.problemService.getLanguage();
  }
}
