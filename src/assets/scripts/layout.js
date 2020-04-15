const year = new Date().getFullYear();
$("#footer-year").html(year);
if (window.location.pathname === "/") {
  const homePageLogoControl = (colored = false) => {
    if (colored) {
      $("#layout-header").css("background-color", "#fff");
      $("#layout-header").css("box-shadow", " 0 1px 0 0 #CECECE");
      $("#layout-header").css("color", "rgb(32,32,32)");

      $("#header-white-logo").hide()
      $("#header-color-logo").show()
      return
    }
    $("#layout-header").css("background-color", "transparent");
    $("#layout-header").css("box-shadow", "none");
    $("#layout-header").css("color", "#fff");

    $("#header-white-logo").show()
    $("#header-color-logo").hide()
  }
  const isMobile = $(window).width() <= 1024
  if (!isMobile) {
    homePageLogoControl(false)

    window.addEventListener("scroll", () => {
      const scrollHeight = $(document).scrollTop();
      const windowHeight = $(window).height();
      scrollHeight <= windowHeight ? homePageLogoControl(false) : homePageLogoControl(true)

    })
  }


}

$("#mobile-list").on("click", () => {
  $("#header-route").animate(
    {
      height: "toggle",
    },
    300
  );
});


