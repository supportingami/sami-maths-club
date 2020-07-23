import { Component, OnInit } from "@angular/core";
import { ProblemService } from "../../services/problem.service";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-problems",
  templateUrl: "./problems-list.component.html",
  styleUrls: ["./problems-list.component.scss"],
})
export class ProblemsListComponent implements OnInit {
  problems;

  constructor(private problemService: ProblemService, private router: Router) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        this.getProblemList();
      }
    });
  }
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
