const video = $("#home-video")[0]
// beacuse every page will excute this script
if (video) {
  const totalTime = video.duration
  const videoHeight = video.videoHeight
  const videoOffsetTop = $(video).offset().top
  const contentHeight = Math.round(totalTime * (videoHeight + videoOffsetTop))
  const windowHeight = $(window).height()
  let scrollPosition = $(document).scrollTop()
  $("#video-wrapper").height(contentHeight)
  console.log(totalTime)

  window.addEventListener("scroll", (e) => {
    if (!$(video)) {
      return
    }
    const scrollHeight = $(document).scrollTop()
    const direction = scrollHeight > scrollPosition ? "down" : "up"
    const step = scrollHeight / contentHeight
    console.log(video.currentTime, scrollHeight, contentHeight)
    direction === "down" ? video.currentTime = step * totalTime : video.currentTime = step * totalTime
    if (scrollHeight >= contentHeight - windowHeight) {
      $(video).toggleClass("fixed-video", false)
      $(video).toggleClass("bottom-video", true)
    } else if (scrollHeight >= videoOffsetTop) {
      console.log("in")
      $(video).toggleClass("fixed-video", true)
      $(video).toggleClass("bottom-video", false)
    } else {
      $(video).toggleClass("fixed-video", false)
      $(video).toggleClass("bottom-video", false)
    }
    scrollPosition = scrollHeight
  })
}

