const video = $("#home-video")[0];
let loaded = false;
// beacuse every page will excute this script
if (video) {
  video.addEventListener("canplay", function () {
    console.log("canplay");
    // only excute once
    if (loaded) {
      return;
    }
    loaded = true;
    const totalTime = video.duration;
    const videoHeight = video.videoHeight;
    const videoOffsetTop = $(video).offset().top;
    const contentHeight = Math.round(
      totalTime * (videoHeight + videoOffsetTop)
    );
    const windowHeight = $(window).height();

    $("#video-wrapper").height(contentHeight);
    window.addEventListener("scroll", (e) => {
      if (!$(video)) {
        return;
      }
      const scrollHeight = $(document).scrollTop();
      const step = scrollHeight / contentHeight;
      video.currentTime = step * totalTime;
      if (scrollHeight >= contentHeight - windowHeight) {
        $("#video-title-wrapper").toggleClass("fixed-video", false);
        $("#video-title-wrapper").toggleClass("bottom-video", true);
      } else if (scrollHeight >= videoOffsetTop) {
        console.log("in");
        $("#video-title-wrapper").toggleClass("fixed-video", true);
        $("#video-title-wrapper").toggleClass("bottom-video", false);
      } else {
        $("#video-title-wrapper").toggleClass("fixed-video", false);
        $("#video-title-wrapper").toggleClass("bottom-video", false);
      }
    });
  });
}
