module.exports = function(env, argv) {
  const prodConfig = require("./config/webpack.prod");
  const devConfig = require("./config/webpack.dev");
  return argv.mode.indexOf("production") >= 0
    ? prodConfig(env)
    : devConfig(env);
};
