module.exports = function mock(app) {
  app.get("/api", function(req, res) {
    res.send({ code: 200, message: "hello world" });
  });
};
