window.addEventListener('load', () => {
  $("#loader").animate({
    opacity: 0
  }, 1000, 'linear', () => $("#loader").hide())
});

(() => {
  $(document).ready(() => {
    $(window).scroll(() => {
      if ($(window).scrollTop() == 0 || $(window).scrollTop()) {
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
