import { Component, OnInit } from "@angular/core";
import { ProblemService } from "../../services/problem.service";

@Component({
  selector: "app-problems",
  templateUrl: "./problems-list.component.html",
  styleUrls: ["./problems-list.component.scss"],
})
export class ProblemsListComponent implements OnInit {
  problems;

  constructor(private problemService: ProblemService) {}
  ngOnInit() {
    this.getProblemList();
  }

  getProblemList() {
    this.problemService.getProblemList().then((res) => {
      this.problems = res;
      console.log("prol", this.problems);
    });
  }
}
