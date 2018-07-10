function configShareConfig() {
  const href = location.href;
  function error(err) {
    console.log(err);
  }

  $.ajax({
    type: "post",
    url: "/scy/hewu-h5/getWxConf",
    data: { url: href },
    success: function(res) {
      let o;
      if (typeof res === "string") {
        o = JSON.parse(res).data;
      } else {
        o = res.data;
      }
      console.log("weixin：", o);
      wx.config({
        debug: false, // 正式需要关闭
        appId: o.appId,
        timestamp: o.timestamp,
        nonceStr: o.nonceStr,
        signature: o.signature,
        jsApiList: [
          "checkJsApi",
          "onMenuShareTimeline",
          "onMenuShareAppMessage",
          "onMenuShareQQ",
          "onMenuShareWeibo",
          "onMenuShareQZone",
          "hideMenuItems",
          "showMenuItems",
          "hideAllNonBaseMenuItem",
          "showAllNonBaseMenuItem",
          "translateVoice",
          "startRecord",
          "stopRecord",
          "onVoiceRecordEnd",
          "playVoice",
          "onVoicePlayEnd",
          "pauseVoice",
          "stopVoice",
          "uploadVoice",
          "downloadVoice",
          "chooseImage",
          "previewImage",
          "uploadImage",
          "downloadImage",
          "getNetworkType",
          "openLocation",
          "getLocation",
          "hideOptionMenu",
          "showOptionMenu",
          "closeWindow",
          "scanQRCode",
          "chooseWXPay",
          "openProductSpecificView",
          "addCard",
          "chooseCard",
          "openCard"
        ]
      });
      wx.ready(() => {
        //eslint-disable-next-line
        // const video = document.querySelector("video");
        // video.play();
        // video.pause();
        // $(".slide2").removeClass("first-bg");
        // video.addEventListener("ended", function (e) {
        //   // 播放结束时触发
        //   if (utils.isiOS) {
        //     globalSwiper.slideTo(2);
        //   }
        // });
        shareAll();
      });
      //eslint-disable-next-line
      wx.error(res => {
        //eslint-disable-next-line
        console.log(res);
      });
    }
  });
  function shareAll() {
    var now = +new Date();
    const imgurl = require("../../assets/share.png");
    const o = {
      title: "",
      desc: "",
      link: location.href,
      imgOrigin: imgurl
    };
    wx.onMenuShareTimeline({
      title: o.title,
      link: o.link,
      imgUrl: location.origin + o.imgOrigin,
      success() {
        // cb();
      },
      cancel() {
        console.log("share cancel");
      }
    });
    wx.onMenuShareAppMessage({
      title: o.title,
      desc: o.desc,
      link: o.link,
      imgUrl: location.origin + o.imgOrigin,
      type: "link",
      dataUrl: "",
      success() {
        // cb();
        console.log("share success", location.origin + o.imgOrigin);
      },
      cancel() {
        console.log("share cancel");
      }
    });
    wx.onMenuShareQQ({
      title: o.title,
      desc: o.desc,
      link: o.link,
      imgUrl: o.imgUrl,
      success() {
        // 用户确认分享后执行的回调函数
      },
      cancel() {
        // 用户取消分享后执行的回调函数
      }
    });
    wx.onMenuShareQZone({
      title: o.title,
      desc: o.desc,
      link: o.link,
      imgUrl: o.imgUrl,
      success() {
        // 用户确认分享后执行的回调函数
      },
      cancel() {
        // 用户取消分享后执行的回调函数
      }
    });
  }
}

export default configShareConfig;
