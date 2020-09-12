import PACKAGE_JSON from "../../package.json";
import FIREBASE_CONFIG from "./firebaseConfig.json";

export const environment = {
  production: true,
  APP_VERSION: PACKAGE_JSON.version,
  FIREBASE_CONFIG,
  // if using firebase, rename firebaseConfig.sample.json => firebaseConfig.json and add config
  // currently populated during production build via github secret
};
