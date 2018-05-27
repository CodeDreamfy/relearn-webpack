const { smart } = require("webpack-merge");
const webpack = require("webpack");
const base = require("./webpack.base");
const mock = require("./mock");
const path = require("path");

module.exports = smart(base, {
  module: {
    rules: [
      {
        test: /.css$/,
        include: [path.resolve(__dirname, "../src/css")],
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)/,
        include: [path.resolve(__dirname, "../src/img")],
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 12000
            }
          }
        ]
      }
    ]
  },
  devServer: {
    // 可以使用 before 实现 mock 数据或者使用 middleware 与 express 实现
    before(app) {
      mock(app);
    },
    hot: true // dev server 的配置要启动 hot，或者在命令行中带参数开启
  },
  plugins: [
    new webpack.NamedModulesPlugin(), // 用于启动 HMR 时可以显示模块的相对路径
    new webpack.HotModuleReplacementPlugin() // Hot Module Replacement 的插件
  ]
});
