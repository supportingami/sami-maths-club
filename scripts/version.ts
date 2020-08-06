import * as fs from "fs-extra";
import inquirer from "inquirer";

const PACKAGE_PATH = "package.json";
const APP_PACKAGE_PATH = "maths-club-app/package.json";
const APP_BUILD_GRADLE = "maths-club-app/android/app/build.gradle";

async function main() {
  const oldVersion = fs.readJSONSync(PACKAGE_PATH).version;
  const newVersion = await promptNewVersion(oldVersion);
  updatePackageJson(newVersion);
  updateGradleBuild(oldVersion, newVersion);
}
main();

function updateGradleBuild(oldVersionName: string, newVersionName: string) {
  let gradleBuildFile = fs.readFileSync(APP_BUILD_GRADLE, {
    encoding: "utf-8",
  });
  const oldVersionCode = _generateVersionCode(oldVersionName);
  const newVersionCode = _generateVersionCode(newVersionName);
  gradleBuildFile = gradleBuildFile.replace(oldVersionCode, newVersionCode);
  gradleBuildFile = gradleBuildFile.replace(oldVersionName, newVersionName);
  fs.writeFileSync(APP_BUILD_GRADLE, gradleBuildFile, { encoding: "utf-8" });
}

async function updatePackageJson(newVersion: string) {
  const mainPackageJSON = fs.readJSONSync(PACKAGE_PATH);
  const appPackageJson = fs.readJSONSync(APP_PACKAGE_PATH);
  mainPackageJSON.version = newVersion;
  appPackageJson.version = newVersion;
  fs.writeJSONSync(PACKAGE_PATH, mainPackageJSON, { spaces: 2 });
  fs.writeJSONSync(APP_PACKAGE_PATH, appPackageJson, { spaces: 2 });
}

async function promptNewVersion(currentVersion: string) {
  const { version } = await inquirer.prompt([
    {
      message: `Specify a version number (current: ${currentVersion})`,
      name: "version",
      validate: (v) =>
        v > currentVersion ? true : "Version number must be increased",
    },
  ]);
  return version;
}

// 2.4.1 => 2004001
function _generateVersionCode(versionName: string) {
  const v = versionName.split(".");
  return `${Number(v[0]) * 1000000 + Number(v[1]) * 1000 + Number(v[2])}`;
}
