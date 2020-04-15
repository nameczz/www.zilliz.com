// const video = $("#home-video")[0];
// let loaded = false;
// const descs = ["In 5 years, the global Datasphere will grow up to 175 ZB", "Unstructured data (image, video, voice, text and etc) are everywhere 80% of all data", "Vector is the new representation of unstructured data", "IoT is the new network for all networks", "By 2025, the number of total connected IoT devices will reach 75B. 10x more than human beings.", "IoT data are driving decision-making process in industries like retail, transportation, healthcare and etc."]

// const subTitles = ["—— Unstructured data are explosively growing", "—— IoT is transforming the way people live and work"]
// const PORTION_COUNTS = 7
// // beacuse every page will excute this script
// if (video) {
//   video.addEventListener("canplay", function () {
//     // only excute once
//     if (loaded) {
//       return;
//     }
//     $("html").scrollTop(0)

//     loaded = true;
//     const totalTime = video.duration;
//     const videoHeight = video.videoHeight;
//     const videoOffsetTop = $(video).offset().top;
//     const contentHeight = Math.round(
//       totalTime * (videoHeight + videoOffsetTop)
//     );
//     const windowHeight = $(window).height();
//     const portion = (contentHeight - windowHeight) / PORTION_COUNTS
//     const videoPortion = totalTime / PORTION_COUNTS
//     let index = 0
//     let position = 0
//     let isAnimation = false
//     $("#video-wrapper").height(contentHeight);
//     video.playbackRate = 2.0
//     const step = 0.04
//     let direction = "down"
//     window.addEventListener("scroll", (e) => {
//       if (!$(video)) {
//         return false;
//       }
//       const scrollHeight = $(document).scrollTop();
//       direction = scrollHeight >= position ? "down" : "up"
//       console.log("scrollheight", scrollHeight, "position", position)

//       position = scrollHeight

//       console.log("isAnimation:", isAnimation)
//       if (isAnimation) {
//         e.preventDefault()
//         return false
//       }

//       if (!isAnimation && (scrollHeight < contentHeight - windowHeight) && scrollHeight >= videoOffsetTop) {
//         isAnimation = true
//         console.log(direction, 'index', index, portion)
//         $("html").animate({
//           scrollTop: direction === "down" ? portion * (index + 1) : portion * (index - 1)
//         }, 1000);

//         changeText("#video_desc", descs[index - 1])
//         index < 3 && changeText("#video_sub_title", subTitles[0])
//         index >= 3 && changeText("#video_sub_title", subTitles[1])

//         direction === "down" ? index++ : index--
//         index = index < 0 ? 0 : index > PORTION_COUNTS ? PORTION_COUNTS : index

//         direction === "down" ? video.currentTime -= step : video.currentTime += step
//         console.log("indexchange----", index)

//       }

//       if (scrollHeight >= (contentHeight + 200)) {
//         $("#video-title-wrapper").toggleClass("fixed-video", false);
//         $("#video-title-wrapper").toggleClass("bottom-video", true);
//       } else if (scrollHeight >= videoOffsetTop) {
//         $("#video-title-wrapper").toggleClass("fixed-video", true);
//         $("#video-title-wrapper").toggleClass("bottom-video", false);
//       } else {
//         $("#video-title-wrapper").toggleClass("fixed-video", false);
//         $("#video-title-wrapper").toggleClass("bottom-video", false);
//       }
//       if (index <= 0 && direction === "up") {
//         setTimeout(() => {
//           $("#video-title-wrapper").toggleClass("fixed-video", false);
//         }, 700)
//       }
//     });
//     video.addEventListener("timeupdate", (e) => {
//       const isAnimationEnd = direction === "down" ? video.currentTime >= videoPortion * (index) : video.currentTime <= videoPortion * (index)
//       console.log(direction, video.currentTime, videoPortion, index)
//       if (isAnimationEnd) {
//         isAnimation = false
//         return
//       }
//       // if (video.currentTime < 0 || video.currentTime >= totalTime) {
//       //   return
//       // }
//       direction === "down"
//         ? video.currentTime = video.currentTime + step > totalTime ? totalTime : video.currentTime + step
//         : video.currentTime = video.currentTime - step < 0 ? 0 : video.currentTime - step

//     })
//   });

// }

// var changeText = function (id, text) {
//   if ($(id).html() === text) return
//   $(id).animate({
//     opacity: 0
//   }, 500, () => {
//     $(id).html(text) // index - 2 because index is already changed
//     $(id).animate({ opacity: 1 })
//   })
// }