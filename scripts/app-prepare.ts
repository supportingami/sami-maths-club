import * as fs from "fs-extra";
import * as path from "path";
import { stripSpecialCharacters } from "./utils/string.utils";

const PACK_DIR = path.join(process.cwd(), "maths-club-pack");
const APP_ASSETS_DIR = path.join(process.cwd(), "maths-club-app/src/assets");

function main() {
  const allProblems = listProblems();
  fs.writeFileSync(
    "maths-club-pack/ProblemsList.ts",
    `export const ALL_PROBLEMS = ${JSON.stringify(allProblems)}`
  );
  fs.emptyDirSync(`${APP_ASSETS_DIR}/maths-club-pack`);
  fs.copySync(PACK_DIR, `${APP_ASSETS_DIR}/maths-club-pack`, {
    recursive: true,
    overwrite: true,
  });
}

function listProblems() {
  const allFiles = recFindByExt("maths-club-pack/en/student", "md");
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
