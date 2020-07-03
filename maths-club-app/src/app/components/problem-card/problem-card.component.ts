import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-problem-card",
  templateUrl: "./problem-card.component.html",
  styleUrls: ["./problem-card.component.scss"],
})
export class ProblemCardComponent implements OnInit {
  problemText: string;
  slug: string;
  language: string = "en";

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  async ngOnInit() {
    this.route.params.subscribe((params) => {
      this.slug = params.slug;
      console.log("Params", this.slug);
    });
    const problemText = await this.http
      .get<string>(
        `/assets/maths-club-pack/${this.language}/student/` + this.slug + `.md`,
        {
          responseType: "text" as any,
        }
      )
      .toPromise();
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
