
/*** Header - Menu ***/
$(window).on("scroll", function(e) {
  if (this.scrollY > 0) {
    $("header").addClass("bg-white").removeClass("bg-transparent");
    $("header nav").addClass("navbar-light")
  } else {
    $("header").removeClass("bg-white").addClass("bg-transparent");
    $("header nav").removeClass("navbar-light")
  }
});

$("a[href='"+window.location.pathname+"']").addClass('active')