window.addEventListener('load', () => {
  $("#loader").animate({
    opacity: 0
  }, 1000, 'linear', () => $("#loader").hide())
});

(() => {
  $(document).ready(() => {
    $(window).scroll(() => {
      if ($(window).scrollTop() == 0 || window.scrollY + window.innerHeight === document.body.offsetHeight) {
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
