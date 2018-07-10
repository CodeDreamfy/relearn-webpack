module.exports = function(env, argv) {
  return argv.mode === "production" ? require("./config/webpack.production") : require("./config/webpack.development");
};
