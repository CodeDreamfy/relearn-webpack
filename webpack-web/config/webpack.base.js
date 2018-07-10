const path = require("path");
const webpack = require("webpack");
const resolve = path.resolve;
const HtmlWebpackPlugin = require("html-webpack-plugin");

const entry = {
  main: resolve(__dirname, "../src/main.js")
};
const resolver = {
  modules: [
    resolve(__dirname, "../node_modules"), // 优先查找，提升速度
    "node_modules"
  ],
  extensions: [".js", ".css"],
  alias: {
    "@": resolve("src")
  }
};
const rules = [
  {
    test: /\.js$/,
    include: [resolve(__dirname, "../src")],
    exclude: /node_modules/,
    use: [
      {
        loader: "babel-loader",
        options: { cacheDirectory: true }
      }
    ]
  }
];
const plugins = [
  new HtmlWebpackPlugin({
    filename: "index.html",
    template: resolve(__dirname, "../src/index.html")
  })
];

module.exports = {
  entry,
  resolve: resolver,
  module: { rules },
  plugins
};
