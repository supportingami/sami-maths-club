import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProblemService } from "../../services/problem.service";

@Component({
  selector: "app-problem-card",
  templateUrl: "./problem-card.component.html",
  styleUrls: ["./problem-card.component.scss"],
})
export class ProblemCardComponent implements OnInit {
  problemText: string;
  slug: string;

  constructor(
    private route: ActivatedRoute,
    private problemService: ProblemService
  ) {}

  async ngOnInit() {
    this.route.params.subscribe((params) => {
      this.slug = params.slug;
    });
    const problemText = await this.problemService.getProblem(this.slug);

    const formattedProblem = this.rewriteImageUrls(problemText);
    this.problemText = formattedProblem;
  }

  rewriteImageUrls(problemText: string) {
    return problemText.replace(
      /\.\.\/\.\.\/images/g,
      "assets/maths-club-pack/images"
    );
  }
}
