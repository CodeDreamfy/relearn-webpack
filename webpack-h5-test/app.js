const middleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const webpackOptions = require("./webpack.config");

webpackOptions.mode = "development";

const compiler = webpack(webpackOptions);
const express = require("express");
const app = express();

app.use(
  middleware(compiler, {
    // webpack-dev-middleware 的配置选项
  })
);
app.get("/api/test", function(req, res) {
  res.send({ code: 200, message: "hehhe" });
});

app.listen(3000, () => console.log("Express app listening on port 3000"));
