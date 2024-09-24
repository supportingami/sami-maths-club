import type { Request } from "firebase-functions/https";

import * as fs from "fs";
import { JSDOM } from "jsdom";

/**
 * Proxy http requests, passing dynamic seo metadata tags on requests from bots
 * Triggered redirect in firebase.json
 * ```
 * "rewrites": [
        {
          "source": "**",
          "function": "seoHost"
        }
   ```
 * Adapted from https://medium.com/@jalalio/dynamic-og-tags-in-your-statically-firebase-hosted-polymer-app-476f18428b8b
 *
 * NOTE - only supports a single deploy project (as index needs to match that build)
 * Workarounds attempted with http get requests but messy
 * */

export const seoHost = (req: Request) => {
  const userAgent = req.headers["user-agent"];
  const baseURL = `${req.protocol}://${req.hostname}`;
  let indexHTML = fs.readFileSync("assets/index.html").toString();
  if (isBot(userAgent)) {
    console.log("is-bot", userAgent);
    const path = req.path.split("/");
    const slug = path[2];
    if (slug) {
      const pathName = req.originalUrl;
      indexHTML = updateProblemTags(slug, indexHTML, baseURL, pathName);
    }
  } else {
    console.log("is-not-bot", userAgent);
  }
  return indexHTML;
};

const updateProblemTags = (
  slug: string,
  indexHTML: string,
  baseURL: string,
  pathName: string
) => {
  const allMeta: IProblemMeta[] = JSON.parse(
    fs.readFileSync("assets/metadata.json", { encoding: "utf8" })
  );
  const meta = allMeta.find((m) => m.slug === slug);
  if (meta) {
    const defaultDescription = `Here's a problem for you to try! If you get stuck there are also notes for facilitators included`;
    const dom = new JSDOM(indexHTML);
    let { document } = dom.window;
    document = updateMeta(document, {
      url: `${baseURL}${pathName}`,
      title: `SAMI Maths Club - ${meta.title}`,
      description: meta.description || defaultDescription,
      // Note - could be replaced with externally hosted image (e.g. cloudinary)
      image: `${baseURL}/assets/maths-club-pack/cover_images/jpgs/${slug}.jpg`,
    });
    return dom.serialize();
  } else {
    return indexHTML;
  }
};

const isBot = (userAgent: string = "") => {
  // match most common bots, e.g. googlebot
  return /bot|baiduspider|facebookexternalhit|crawler|spider|crawling|metainspector|whatsapp|insomnia|slurp|lighthouse/i.test(
    userAgent
  );
};
const updateMeta = (document: Document, update: IMetaUpdate) => {
  const { url, title, description, image } = update;
  document.querySelector("meta[name='title']")!.setAttribute("content", title);
  document
    .querySelector("meta[property='og:title']")!
    .setAttribute("content", title);
  document
    .querySelector("meta[property='twitter:title']")!
    .setAttribute("content", title);
  document
    .querySelector("meta[name='description']")!
    .setAttribute("content", description);
  document
    .querySelector("meta[property='og:description']")!
    .setAttribute("content", description);
  document
    .querySelector("meta[property='twitter:description']")!
    .setAttribute("content", description);
  document
    .querySelector("meta[property='og:image']")!
    .setAttribute("content", image);
  document
    .querySelector("meta[property='twitter:image']")!
    .setAttribute("content", image);
  document
    .querySelector("meta[property='og:url']")!
    .setAttribute("content", url);
  document
    .querySelector("meta[property='twitter:url']")!
    .setAttribute("content", url);
  return document;
};

interface IMetaUpdate {
  url: string;
  title: string;
  description: string;
  image: string;
}
// TODO - import from shared source
interface IProblemMeta {
  title: string;
  type: string;
  description?: string;
  printOrder: number;
  added: string;
  slug: string;
  hasStudentVersion: boolean;
  hasFacilitatorVersion: boolean;
}
