import BG from "../../img/bg.jpg";
module.exports = function() {
  setTimeout(() => {
    const h1 = document.querySelector("h1");
    h1.style.background = `url(${BG}) no-repeat`;
    $("h1").css({
      color: "red"
    });
  }, 1500);
};
