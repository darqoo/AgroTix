window.addEventListener('load', () => {
  $("#loader").animate({
    opacity: 0
  }, 1000, 'linear', () => $("#loader").hide())
});

(() => {
    $(document).ready(() => {

        var position = 0;

        var a = $('.nav-item a')
        c = [];
        for (let i = 0; i < a.length; i++) {
          c.push(a[i].hash);
        }

        var sCroll = (e) => {
          document.removeEventListener('wheel', sCroll)
          e.preventDefault();
          if (e.deltaY > 0 && position !== c.length - 1) {
            position++
          } else if (e.deltaY < 0 && position !== 0) {
            position--
          }
          console.log(position)
          $('html, body').animate({
            scrollTop: window.innerHeight >= 400 ? $(c[position]).offset().top - 61 : $(c[position]).offset().top
          }, 800, function() {
            window.location.hash = c[position];
            window.scrollTo(0, window.innerHeight >= 400 ? $(c[position]).offset().top - 61 : $(c[position]).offset().top);
            document.addEventListener('wheel', sCroll)
          });

        }
$('body').css('overflow', 'hidden');
        document.addEventListener('wheel', sCroll);

      $(window).scroll((e) => {
        if ($(window).scrollTop() == 0 || window.scrollY + window.innerHeight === document.body.offsetHeight) {
          $('.bottom-menu').fadeIn();
        } else {
          $('.bottom-menu').fadeOut();
        }



      }); $("a").on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: window.innerHeight >= 400 ? $(hash).offset().top - 61 : $(hash).offset().top
          }, 800, function() {
            window.location.hash = hash;
            window.scrollTo(0, window.innerHeight >= 400 ? $(hash).offset().top - 61 : $(hash).offset().top);
          });
        }
      });
    });
})();

$(window).click(function() {
  $('.collapse').collapse('hide');
})
