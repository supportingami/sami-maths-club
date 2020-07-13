import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ProblemService } from "../../services/problem.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-problem-card",
  templateUrl: "./problem-card.component.html",
  styleUrls: ["./problem-card.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ProblemCardComponent implements OnInit {
  problemText: string;

  constructor(
    private problemService: ProblemService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    const slug = this.route.snapshot.params.slug;
    console.log("slug", slug);
    const problemText = await this.problemService.getProblem(slug);
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
