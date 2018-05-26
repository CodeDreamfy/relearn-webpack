import "../css/app.css";
import fun from "./module/app";

console.log("hello");
$.ajax({
  url: "/api",
  dataType: "json",
  method: "get",
  success: function(res) {
    console.log(res);
  }
});
fun();
