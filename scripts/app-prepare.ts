import * as fs from "fs-extra";
import * as path from "path";
import { stripSpecialCharacters } from "./utils/string.utils";
import { replaceInFileSync } from "replace-in-file";

const PACK_DIR = "./maths-club-pack";
const APP_ASSETS_DIR = "./maths-club-app/src/assets";
const APP_PACK_DIR = "./maths-club-app/src/assets/maths-club-pack";
const TRANSLATIONS_DIR = "./translations";

function main() {
  copyTranslationsForUpload();
  copyPackToApp();
  generateAppProblemsList();
}
function generateAppProblemsList() {
  const allProblems = listProblems();
  fs.writeFileSync(
    `${APP_ASSETS_DIR}/ProblemsList.ts`,
    `export const ALL_PROBLEMS = ${JSON.stringify(allProblems)}`
  );
}

/**
 * Copy images from main app pack folder and translated pack from translations problem.
 * Convert urls from translations before copy to use relative paths instead of absolute urls
 */
function copyPackToApp() {
  fs.emptyDirSync(APP_PACK_DIR);
  fs.copySync(TRANSLATIONS_DIR, APP_PACK_DIR);
  rewriteAppImageUrlsFromTranslation();
  fs.copySync(`${PACK_DIR}/cover_images`, `${APP_PACK_DIR}/cover_images`);
  fs.copySync(`${PACK_DIR}/images`, `${APP_PACK_DIR}/images`);
}

/**
 * Make a copy of all maths clug pack en versions and change image asset urls
 * to display on crowdin using github asset direct link instead of local files
 */
function copyTranslationsForUpload() {
  fs.emptyDirSync(`${TRANSLATIONS_DIR}/en`);
  fs.copySync(`${PACK_DIR}/content`, "translations/en");
  rewriteAppImageUrlsForTranslation();
}
/**
 *  Look through files and replace ../../images references
 *  with github project direct link so can be displayed on crowdin
 */
function rewriteAppImageUrlsForTranslation() {
  replaceInFileSync({
    files: `${TRANSLATIONS_DIR}/**/*.md`,
    from: /(..\/)(.)*.(?:jpg|jpeg|gif|png)/g,
    to: (match) =>
      match.replace(
        "../../images",
        "https://github.com/supportingami/sami-maths-club/blob/master/maths-club-pack/images"
      ) + "?raw=true",
  });
}
/**
 * Reverse process of above `rewriteAppImageUrlsForTranslation`
 */
function rewriteAppImageUrlsFromTranslation() {
  replaceInFileSync({
    files: `${APP_PACK_DIR}/**/*.md`,
    from: /(https:\/\/github.com\/supportingami\/sami-maths-club\/blob\/master\/maths-club-pack\/images\/)(.)*(raw=true)/g,
    to: (match) =>
      match
        .replace(
          "https://github.com/supportingami/sami-maths-club/blob/master/maths-club-pack/images",
          "../../images"
        )
        .replace("?raw=true", ""),
  });
}

function listProblems() {
  const allFiles = recFindByExt("maths-club-pack/content/student", "md");
  return allFiles.map((filepath: string) => {
    const title = extractProblemTitle(filepath);
    const filename = path.basename(filepath, ".md");
    return {
      title: title,
      slug: stripSpecialCharacters(filename),
    };
  });
}

/**
 * Reads a markdown files and returns the first line as a problem title
 */
function extractProblemTitle(filepath: string) {
  const fileText = fs.readFileSync(filepath, { encoding: "utf-8" });
  return fileText.split("\n")[0].replace(/#/g, "").trim();
}

/**
 * find files by a given extension recursively, returning full paths
 * */
function recFindByExt(base, ext, files?, result?) {
  files = files || fs.readdirSync(base);
  result = result || [];
  for (const file of files) {
    const newbase = path.join(base, file);
    if (fs.statSync(newbase).isDirectory()) {
      const newFiles = fs.readdirSync(newbase);
      result = recFindByExt(newbase, ext, newFiles, result);
    } else {
      if (file.split(".").pop() === ext) {
        result.push(newbase);
      }
    }
  }
  return result;
}

main();
