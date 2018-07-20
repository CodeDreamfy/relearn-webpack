let webpackConfig;
module.exports = function(env, argv) {
  switch (env) {
    case "prod":
    case "production":
      webpackConfig = require("./configs/webpack.prod");
      break;
    case "dev":
    case "development":
    default:
      webpackConfig = require("./configs/webpack.dev");
  }
  return webpackConfig;
};
