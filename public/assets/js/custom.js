// client-slider

$("#client-slider").owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayHoverPause: false,
  mouseDrag: false,
  navText: [
    "<img src='/assets/images/chevron-left.png'>",
    "<img src='/assets/images/chevron-right.png'>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      dotsEach: 3,
      items: 1,
    },
    800: {
      dotsEach: 3,
      items: 2,
    },
    900: {
      dotsEach: 3,
      items: 2,
    },
    1000: {
      dotsEach: 3,
      items: 2,
    },
    1200: {
      dotsEach: 3,
      items: 3,
    },
    1400: {
      dotsEach: 3,
      items: 3,
    },
  },
});

// featured
$("#featured").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayHoverPause: false,
  mouseDrag: false,
  navText: [
    "<img src='/assets/images/chevron-left.png'>",
    "<img src='/assets/images/chevron-right.png'>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1400: {
      items: 1,
    },
  },
});

// dropdown-menu click open close-nav

jQuery(document).ready(function () {
  jQuery(".btn-top-drop").on("click", function (event) {
    jQuery(".dropdown-menu").toggle("show");
  });
});
