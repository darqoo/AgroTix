window.addEventListener('load', () => {
  $("#loader").animate({
    opacity: 0
  }, 1000, 'linear', () => $("#loader").hide())
});

(() => {
  $(document).ready(() => {
    // $(".top_menu").hide();
    $(() => {
      $(window).scroll(() => {
        if ($(window).scrollTop() >= window.innerHeight / 9) {
          // $('.top_menu').fadeIn();
          // $('.home_page_logo').fadeOut();
        } else {
          // $('.top_menu').fadeOut();
          // $('.home_page_logo').fadeIn();
        }
      });
    });
    $(window).scroll(() => {
      if ($(window).scrollTop() == 0) {
        $('.bottom-menu').fadeIn();
      } else {
        $('.bottom-menu').fadeOut();
      }
    });
  });
})();

$(window).click(function() {
    $('.collapse').collapse('hide');
})
