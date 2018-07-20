/**
 * 通用基础配置
 * @author CodeDreamfy
 */
const fs = require("fs");
const path = require("path");
// const webpack = require("webpack");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = require("./config");

const pageEntrys = {}; // 页面入口
const pageHtml = []; // 页面模板
const commonChunks = []; // 用户自定义组件

/**
 * 按规则生成entry 和 html plugin
 * pages下的每一个目录表示一个页面
 */
!(function generateEntryAndHtmlPlugin() {
  const pages = fs.readdirSync(
    path.resolve(__dirname, "../", config.pagesRoot)
  );
  pages.forEach(function(name, index) {
    const url = path.join(__dirname, "../", config.pagesRoot, name);
    if (fs.statSync(url).isDirectory()) {
      pageEntrys[name] = path.normalize(`../${config.pagesRoot}/${name}`);
      const hwp = new HtmlWebpackPlugin({
        filename: `${config.pagesRoot.replace(
          "./src/",
          ""
        )}/${name}/index.html`,
        template: pageEntrys[name]
      });
    }
  });
})();
