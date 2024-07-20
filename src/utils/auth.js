import crypto from "crypto-browserify";

const userKey = "2rt3vdeg344323";
const secret = "43453453";

export const generateSignature = (method, params) => {
  const sortedParams = Object.keys(params)
    .sort()
    .reduce((obj, key) => {
      obj[key] = params[key];
      return obj;
    }, {});

  const paramsStr = new URLSearchParams(sortedParams).toString();
  const methodStr =
    method +
    paramsStr +
    crypto.createHash("md5").update(paramsStr).digest("hex");

  const hash = crypto
    .createHmac("sha1", secret)
    .update(methodStr)
    .digest("base64");
  return `${userKey}:${hash}`;
};
