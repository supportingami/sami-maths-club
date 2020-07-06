import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ProblemService {
  language: string = "en";

  constructor(private http: HttpClient) {
    console.log("problem service initialised");
  }

  // Get problem
  async getProblem(slug: string) {
    console.log("getting problem", slug, this.language);
    return await this.http
      .get<string>(
        `/assets/maths-club-pack/${this.language}/student/` + slug + `.md`,
        {
          responseType: "text" as any,
        }
      )
      .toPromise();
  }

  // Set Language
  setLanguage(lang: string) {
    this.language = lang;
  }

  getLanguage() {
    return this.language;
  }
}
