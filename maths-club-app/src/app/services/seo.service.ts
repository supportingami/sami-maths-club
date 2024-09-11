import { DOCUMENT } from "@angular/common";
import { effect, Inject, Injectable } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ProblemService } from "./problem.service";
import { IProblem } from "../models/problem.models";

@Injectable({
  providedIn: "root",
})
/**
 * Automatically update tags and metadata when navigating the app for use in SEO
 * Changes browser tab titles and favicon, and provides various og: and social card meta
 * NOTE - Only works in the browser, for server-side (e.g. bots) require SSR or API
 * (see seoHost.ts in functions for current implementation)
 */
export class SeoService {
  constructor(
    private title: Title,
    private meta: Meta,
    private problemService: ProblemService,
    @Inject(DOCUMENT) private document: Document
  ) {
    effect(() => {
      const problem = this.problemService.activeProblem();
      this.setProblemMeta(problem);
    });
  }

  updateMeta = (update: IMetaUpdate) => {
    let { url, title, description, image, favicon } = update;
    this.title.setTitle(title);
    this.meta.updateTag({ name: "title", content: title });
    this.meta.updateTag({ property: "twitter:title", content: title });
    this.meta.updateTag({ property: "og:url", content: url });
    this.meta.updateTag({ property: "twitter:url", content: url });
    this.meta.updateTag({ name: "description", content: description });
    this.meta.updateTag({ property: "og:description", content: description });
    this.meta.updateTag({
      property: "twitter:description",
      content: description,
    });
    this.meta.updateTag({ property: "og:image", content: image });
    this.meta.updateTag({ property: "twitter:image", content: image });
    const favIcon: HTMLLinkElement = this.document.querySelector("#svgIcon");
    favIcon.href = favicon;
  };

  private setDefaultMeta() {
    this.updateMeta({
      title: "SAMI Maths Club",
      image: "/assets/seo.jpg",
      url: "/",
      favicon: `/assets/favicon.svg`,
      description:
        "A collection of mathematical problems and puzzles to support mathematical thinking, problem solving, and a love of mathematics!",
    });
  }

  private setProblemMeta(p?: IProblem) {
    if (p) {
      const { origin, href } = this.document.location;
      this.updateMeta({
        title: p.title,
        image: `/assets/maths-club-pack/cover_images/jpgs/${p.slug}.jpg`,
        url: `${origin}/${href}`,
        favicon: `/assets/maths-club-pack/cover_images/${p.slug}.svg`,
        // TODO - include problem description meta
        description: defaultDescription,
      });
    } else {
      this.setDefaultMeta();
    }
  }
}
interface IMetaUpdate {
  url: string;
  title: string;
  favicon: string;
  description?: string;
  image: string;
}

const defaultDescription = `Here's a problem for you to try! If you get stuck there are also notes for facilitators included`;
