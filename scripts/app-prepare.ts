import * as fs from "fs-extra";
import * as path from "path";
import { replaceInFileSync } from "replace-in-file";
import fm from "front-matter";
import { stripSpecialCharacters } from "./utils/string.utils";
import { IProblemMeta } from "../maths-club-app/src/app/models/problem.models";

const PACK_DIR = "./maths-club-pack";
const APP_PACK_DIR = "./maths-club-app/src/assets/maths-club-pack";
const TRANSLATIONS_DIR = "./translations";

function main() {
  copyTranslationsForUpload();
  generateTranslationsMeta();
  copyPackToApp();
}

/**
 * For each language list the problems available in student versions,
 * Extract metadata from the base pack folder for the problem and populate
 * a metadata.json object with the metadata and translated title extracted from
 * translation text
 */
function generateTranslationsMeta() {
  const langDirs = _listDirectories(TRANSLATIONS_DIR);
  for (let lang of langDirs) {
    const langFolder = `${TRANSLATIONS_DIR}/${lang}`;
    const studentVersions = fs.readdirSync(`${langFolder}/student`);
    const meta: IProblemMeta[] = studentVersions.map((filename: string) => {
      const problemPath = `${langFolder}/student/${filename}`;
      // metadata only stored in eng version
      const enPath = `${PACK_DIR}/content/student/${filename}`;
      return {
        ...extractProblemMeta(enPath),
        title: extractTranslatedTitle(problemPath),
        hasStudentVersion: fs.existsSync(`${langFolder}/student/${filename}`),
        hasFacilitatorVersion: fs.existsSync(
          `${langFolder}/facilitator/${filename}`
        ),
      };
    });
    fs.writeJSONSync(`${TRANSLATIONS_DIR}/${lang}/metadata.json`, meta);
  }
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
 * to display on crowdin using github asset direct link instead of local files.
 * Remove metadata from yml
 */
function copyTranslationsForUpload() {
  fs.emptyDirSync(`${TRANSLATIONS_DIR}/en`);
  fs.copySync(`${PACK_DIR}/content`, "translations/en");
  removeProblemMeta("./translations/en/student");
  rewriteAppImageUrlsForTranslation();
}
/**
 *  Look through files and replace ../../images references
 *  with github project direct link so can be displayed on crowdin
 */
function rewriteAppImageUrlsForTranslation() {
  replaceInFileSync({
    files: `${TRANSLATIONS_DIR}/en/**/*.md`,
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

/**
 * Read markdown file and return content between ---   --- as json object
 * Add additional slug field
 */
function extractProblemMeta(filepath: string): IProblemMeta {
  const fileText = fs.readFileSync(filepath, { encoding: "utf-8" });
  const attributes = fm(fileText).attributes as IProblemMeta;
  if (Object.keys(attributes).length === 0) {
    throw new Error(`No Metadata Specified at top of ${filepath}`);
  }
  const slug = stripSpecialCharacters(attributes.title);
  return { ...attributes, slug };
}

function extractTranslatedTitle(filepath: string) {
  const fileText = fs.readFileSync(filepath, { encoding: "utf-8" });
  return fileText.split("\n")[0].replace(/#/g, "").trim();
}
/**
 * Find all .md files within a folder and remove content between ---  ---
 */
function removeProblemMeta(folderBase: string) {
  const filepaths = recFindByExt(folderBase, "md");
  for (const filepath of filepaths) {
    const fileText = fs.readFileSync(filepath, { encoding: "utf-8" });
    const { body } = fm(fileText);
    fs.writeFileSync(filepath, body, { encoding: "utf-8" });
  }
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

/**
 * Provide a list of all child directories of a given folder path (non-recursive)
 */
function _listDirectories(path: string) {
  return fs
    .readdirSync(path, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
}

main();
