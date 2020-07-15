import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ProblemService } from "../../services/problem.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-problem-detail",
  templateUrl: "./problem-detail.component.html",
  styleUrls: ["./problem-detail.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ProblemDetailComponent implements OnInit {
  problemText: string;

  constructor(
    private problemService: ProblemService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    const slug = this.route.snapshot.params.slug;
    const problemText = await this.problemService.getProblem(slug, "student");
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
