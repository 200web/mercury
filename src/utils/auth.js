import CryptoJS from "crypto-js";

const userKey = process.env.REACT_APP_USER_KEY;
const secret = process.env.REACT_APP_SECRET;

export const generateSignature = (method, params) => {
  const sortedParams = Object.keys(params)
    .sort()
    .reduce((obj, key) => {
      obj[key] = params[key];
      return obj;
    }, {});

  const paramsStr = new URLSearchParams(sortedParams).toString();

  const md5Hash = CryptoJS.MD5(paramsStr).toString();
  const methodStr = method + paramsStr + md5Hash;

  const hash = CryptoJS.HmacSHA1(methodStr, secret);

  const base64Hash = CryptoJS.enc.Base64.stringify(hash);

  return `${userKey}:${base64Hash}`;
};
