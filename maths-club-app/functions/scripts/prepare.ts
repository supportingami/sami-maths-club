import * as fs from "fs";
/**
 * Copy assets from main build to use with seoHost function
 */
function main() {
  fs.copyFileSync(
    "../dist/sami-maths-club-app/index.html",
    "assets/index.html"
  );
  fs.copyFileSync(
    "../dist/sami-maths-club-app/assets/maths-club-pack/en/metadata.json",
    "assets/metadata.json"
  );
}
main();
