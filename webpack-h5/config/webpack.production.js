const { smart } = require("webpack-merge");
const webpack = require("webpack");
const base = require("./webpack.base");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = smart(base, {
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, "../src/css")],
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "postcss-loader"],
          publicPath: "../"
        })
      },
      {
        test: /\.(png|jpe?g|gif)/,
        include: [path.resolve(__dirname, "../src/img")],
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "images/[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "./css/[name].[hash].css"
    })
  ]
});
