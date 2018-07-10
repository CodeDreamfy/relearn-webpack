import AOS from "aos";

document.onreadystatechange = function() {
  if (document.readyState === "complete") {
    initApplication();
  }
};

function initApplication() {
  AOS.init();
}
