const year = new Date().getFullYear();
$("#footer-year").html(year);
if (window.location.pathname === "/") {
  $("#layout-header").css("background-color", "transparent");
  $("#layout-header").css("box-shadow", "none");
}

$("#mobile-list").on("click", () => {
  $("#header-route").animate(
    {
      height: "toggle",
    },
    300
  );
});
