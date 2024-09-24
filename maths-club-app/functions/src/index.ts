import { setGlobalOptions } from "firebase-functions/options";
import { seoHost } from "./seoHost";
import { onRequest } from "firebase-functions/https";

setGlobalOptions({ region: "europe-west1" });

// NOTE - will need to allow unauthenticated invocation
// https://cloud.google.com/functions/docs/securing/managing-access-iam#allowing_unauthenticated_http_function_invocation
exports.seoHost2 = onRequest((req, res) => {
  const indexHtml = seoHost(req);
  res.status(200).send(indexHtml);
});
