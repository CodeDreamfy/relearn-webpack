const { smart } = require("webpack-merge");
const webpack = require("webpack");
const base = require("./webpack.base");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = smart(base, {
  optimization: {
    splitChunks: {}
  },
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
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                // jpeg压缩
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: "65-90",
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"], { root: path.resolve(__dirname, "../") }),
    new ExtractTextPlugin({
      filename: "./css/[name].[hash].css"
    })
  ]
});
