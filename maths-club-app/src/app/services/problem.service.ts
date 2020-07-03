import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ProblemService {
  language: string = "en";

  constructor(private http: HttpClient) {}

  // Get problem
  async getProblem(slug) {
    return await this.http
      .get<string>(
        `/assets/maths-club-pack/${this.language}/student/` + slug + `.md`,
        {
          responseType: "text" as any,
        }
      )
      .toPromise();
  }
}
