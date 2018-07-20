const path = require("path");
const ROOT = path.resolve(__dirname, "..");
const ip = require("ip").address();
const config = {
  root: ROOT,
  assetsSubDirectory: "static",
  assetsPublicPath: "/",
  pagesRoot: "./src/pages",
  proxyTable: {},
  host: "localhost",
  port: 8080
};
module.exports = config;
