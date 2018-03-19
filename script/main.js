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
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top - 61
        }, 800, function() {
          window.location.hash = hash;
          window.scrollTo(0, $(hash).offset().top - 61);


        });
      }
    });
  });
})();

$(window).click(function() {
  $('.collapse').collapse('hide');
})
