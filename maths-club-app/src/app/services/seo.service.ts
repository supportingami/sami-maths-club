import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ProblemService } from "./problem.service";

@Injectable({
  providedIn: "root",
})
export class SeoService {
  constructor(
    private title: Title,
    private meta: Meta,
    private problemService: ProblemService,
    @Inject(DOCUMENT) private document: any
  ) {}

  init() {
    this.setDefaultMeta();
    this._subscribeToProblemUpdates();
  }

  updateTitle(title: string) {
    this.title.setTitle(title);
    this.meta.updateTag({ name: "title", content: title });
    this.meta.updateTag({ name: "twitter:title", content: title });
  }

  updateOgUrl(url: string) {
    url = `${location.origin}/url`;
    this.meta.updateTag({ name: "og:url", content: url });
    this.meta.updateTag({ name: "twitter:url", content: url });
  }

  updateDescription(desc: string) {
    this.meta.updateTag({ name: "description", content: desc });
    this.meta.updateTag({ name: "og:description", content: desc });
    this.meta.updateTag({ name: "twitter:description", content: desc });
  }

  updateImage(src: string) {
    src = `${location.origin}/assets/${src}`;
    console.log("updating image", src);
    this.meta.updateTag({ name: "og:image", content: src });
    this.meta.updateTag({ name: "twitter:image", content: src });
    const favIcon: HTMLLinkElement = this.document.querySelector("#appIcon");
    favIcon.href = src;
  }

  private setDefaultMeta() {
    this.updateTitle("SAMI Maths Club");
    this.updateOgUrl("/");
    this.updateImage("icon.png");
    this.updateDescription(
      "SAMI Maths Club is a collection of mathematical problems and puzzles to support mathematical thinking, problem solving, and a love of mathematics!"
    );
  }

  private _subscribeToProblemUpdates() {
    this.problemService.activeProblem$.subscribe((p) => {
      if (p) {
        this.updateTitle(p.title);
        this.updateDescription(p.studentVersionText);
        this.updateImage(`maths-club-pack/cover_images/${p.slug}.png`);
      } else {
        this.setDefaultMeta();
      }
    });
  }
}
