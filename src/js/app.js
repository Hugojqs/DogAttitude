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

/*** GMaps ***/
if($('#googleMaps').length > 0){
  var gMaps = new GMaps({
    el: '#googleMaps',
    lat: 45.2240624,
    lng: 5.6888814999999795,
    zoom: 17,
  });
  gMaps.addMarker({
    lat: 45.2240624,
    lng: 5.6888814999999795,
    icon: 'img/icon/placeholder.png',
    infoWindow: {
      content: '<h3 class="text-primary">Dog Attitude</h3><h6>2 Rue du 19 Mars 1962,<br> 38120 Saint-Egrève</h6>'
    }
  })
}
