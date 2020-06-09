import * as fs from "fs-extra";
import * as path from "path";

const PACK_DIR = path.join(process.cwd(), "maths-club-pack");
const APP_ASSETS_DIR = path.join(process.cwd(), "maths-club-app/src/assets");

function main() {
  console.log("copying maths club pack to app assets");
  fs.copySync(PACK_DIR, `${APP_ASSETS_DIR}/maths-club-pack`, {
    recursive: true,
    overwrite: true,
  });
}
main();
