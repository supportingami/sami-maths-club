import PACKAGE_JSON from "../../package.json";

export const environment = {
  production: false,
  APP_VERSION: PACKAGE_JSON.version,
};
