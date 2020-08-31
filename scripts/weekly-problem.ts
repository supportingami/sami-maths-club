import * as fs from "fs-extra";
import { IProblemMeta } from "../maths-club-app/src/app/models/problem.models";
/**
 * Create a list of problems to feature each week for the future
 * Write directly to data folder within maths-club-app/src/data for use in app
 * TODO - Ideally want to also ensure available in other languages if possible
 */
function main() {
  const startDate = new Date(2020, 7, 30);
  const allProblems: IProblemMeta[] = fs.readJsonSync(
    "./translations/en/metadata.json"
  );
  const filtered = allProblems
    .sort((a, b) => (a.added > b.added ? 1 : -1))
    .filter((p) => p.hasStudentVersion && p.hasFacilitatorVersion)
    .map((p) => p.slug);
  const weeklyProblems = {};
  for (let i = 0; i < 200; i++) {
    const slug = filtered[i % filtered.length];
    weeklyProblems[startDate.toISOString().substring(0, 10)] = slug;
    startDate.setDate(startDate.getDate() + 7);
  }
  fs.writeFileSync(
    "maths-club-app/src/app/data/weeklyProblems.ts",
    `export const WEEKLY_PROBLEMS = ${JSON.stringify(weeklyProblems)}`
  );
}
main();
