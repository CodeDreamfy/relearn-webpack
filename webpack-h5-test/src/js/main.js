import "../css/app.css";
const { log } = require("@utils/index");

if (process.env.NODE_ENV === "development") {
  $.ajax({
    url: "/api",
    dataType: "json",
    method: "get",
    success: function(res) {
      log(res);
    }
  });
}
