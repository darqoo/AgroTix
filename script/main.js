window.addEventListener('load', () => {
  $("#loader").animate({
    opacity: 0
  }, 1000, 'linear', () => $("#loader").hide())
});

(() => {
  $(document).ready(() => {
    $(".top_menu").hide();
    $(() => {
      $(window).scroll(() => {
        if ($(window).scrollTop() >= 200) {
          $('.top_menu').fadeIn();
          $('.home_page_logo').fadeOut();
        } else if ($(window).scrollTop() <= 200) {
          $('.top_menu').fadeOut();
          $('.home_page_logo').fadeIn();
        }
      });
    });
  });
})();
