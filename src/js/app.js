/*** Header - Menu ***/
$(document).ready(function() {
  $(window).on("scroll load", function(e) {
    if (this.scrollY > 0) {
      $("header")
        .addClass("bg-white")
        .removeClass("bg-transparent");
      $("header nav").addClass("navbar-light");
    } else {
      $("header")
        .removeClass("bg-white")
        .addClass("bg-transparent");
      $("header nav").removeClass("navbar-light");
    }
  });

  $("header nav li a[href='" + window.location.pathname + "']").addClass(
    "active"
  );
  $("header nav .navbar-toggler").click(function() {
    $("header")
      .addClass("bg-white")
      .removeClass("bg-transparent");
    $("header nav").addClass("navbar-light");
  });
});