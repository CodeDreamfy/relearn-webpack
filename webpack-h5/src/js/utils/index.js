export default {
  isAndroid: function () {
    return window.navigator.userAgent.indexOf("Android") > -1 || window.navigator.userAgent.indexOf("Adr") > -1
  }, //android终端
  isiOS: function () {
    return !!window.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  } //ios终端
};
