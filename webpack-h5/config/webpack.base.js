const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/js/main.js"
  },
  output: {
    filename: "js/[name].[hash].js",
    path: path.resolve(__dirname, "../dist")
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "../node_modules"), // 优先查找，提升速度
      "node_modules"
    ],
    alias: {
      "@utils": path.resolve(__dirname, "../src/utils")
    },
    extensions: [".js", ".css"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "../src")],
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true // 指定的目录将用来缓存 loader 的执行结果
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["../dist"]),
    new webpack.DefinePlugin({
      // webpack 内置的插件
      // 用于创建一些在编译时可以配置的全局常量,常量的值我们可以在 webpack 的配置
      // "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.ProvidePlugin({
      // webpack 内置的插件
      // 自动加载模块，而不必到处 import 或 require
      $: "jquery",
      jQuery: "jquery"
    }),
    new HtmlWebpackPlugin({
      // filename: "index.html",
      template: path.resolve(__dirname, "../index.html")
    })
  ]
};
