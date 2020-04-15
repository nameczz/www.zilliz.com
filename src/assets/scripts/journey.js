const cb = () => {
  const windowWidth = $(document).width();
  console.log(windowWidth);

  if (windowWidth <= 1024) {
    $("#journey-pc").hide();
    $("#journey-mobile").show();
  } else {
    $("#journey-pc").show();
    $("#journey-mobile").hide();
  }
};
window.addEventListener("resize", cb);
cb();
