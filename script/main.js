window.addEventListener('load', () => {
  $("#loader").animate({
    opacity: 0
  }, 1000, 'linear', () => $("#loader").hide())
});

$(document).ready(() => {



  var a = $('.nav-item a')
  c = [];
  for (let i = 0; i < a.length; i++) {
    c.push(a[i].hash);
  }

  if (c.indexOf(window.location.hash) == -1) {
    window.location.hash = c[0];
    var position = 0;
  } else {
    position = c.indexOf(window.location.hash);
    console.log(position);
  }

  $('a').on('click', function() {
    position = c.indexOf(this.hash);
    console.log(position);
  })

  var fingerScroll = () => {
    var Y1;
    window.addEventListener('touchstart', function(event) {
      Y1 = event.changedTouches[0].clientY;
      event.preventDefault();
    }, {
      passive: false
    });

    window.addEventListener('touchend', function(event) {
      var Y2 = event.changedTouches[0].clientY;
      event.preventDefault();
      var direction = Y1 - Y2;
      if (direction < 0) {
        console.log('do gory');

        document.removeEventListener('wheel', sCroll);
        if (window.scrollY === 0 || window.scrollY > $(c[position]).offset().top) {
          $('body').css('overflow', '');
          document.addEventListener('wheel', sCroll);
          console.log('scroll');
        } else if (window.scrollY <= $(c[position]).offset().top) {
          $('body').css('overflow', 'hidden');
          if (direction > 0 && position !== c.length - 1) {
            position++
          } else if (direction < 0 && position !== 0) {
            position--
          }
          $('html, body').animate({
            scrollTop: window.innerHeight >= 400 ? $(c[position]).offset().top - 61 : $(c[position]).offset().top
          }, 800, function() {
            window.location.hash = c[position];
            window.scrollTo(0, window.innerHeight >= 400 ? $(c[position]).offset().top - 61 : $(c[position]).offset().top);
            document.addEventListener('wheel', sCroll);
            $('body').css('overflow', '');
          });
        }
      } else if (direction > 0) {
        console.log('do dolu');
        document.removeEventListener('wheel', sCroll);
        if (window.scrollY + window.innerHeight < $(c[position]).offset().top + $(c[position]).innerHeight() || window.scrollY + window.innerHeight === $(c[c.length - 1]).offset().top + $(c[c.length - 1]).innerHeight()) {
          $('body').css('overflow', '');
          document.addEventListener('wheel', sCroll);
        } else if (window.scrollY + window.innerHeight >= $(c[position]).offset().top + $(c[position]).innerHeight() && position !== c.length - 1) {
          $('body').css('overflow', 'hidden');
          if (direction > 0 && position !== c.length - 1) {
            position++
          } else if (direction < 0 && position !== 0) {
            position--
          }
          $('html, body').animate({
            scrollTop: window.innerHeight >= 400 ? $(c[position]).offset().top - 61 : $(c[position]).offset().top
          }, 800, function() {
            window.location.hash = c[position];
            window.scrollTo(0, window.innerHeight >= 400 ? $(c[position]).offset().top - 61 : $(c[position]).offset().top);
            document.addEventListener('wheel', sCroll);
            $('body').css('overflow', '');
          });
        }
      }
    }, {
      passive: false
    });
  };
  fingerScroll();

  var sCroll = (e) => {
    if (e.deltaY > 0) {
      console.log('do dolu');
      document.removeEventListener('wheel', sCroll);
      if (window.scrollY + window.innerHeight < $(c[position]).offset().top + $(c[position]).innerHeight() || window.scrollY + window.innerHeight === $(c[c.length - 1]).offset().top + $(c[c.length - 1]).innerHeight()) {
        $('body').css('overflow', '');
        document.addEventListener('wheel', sCroll);
      } else if (window.scrollY + window.innerHeight >= $(c[position]).offset().top + $(c[position]).innerHeight() && position !== c.length - 1) {
        $('body').css('overflow', 'hidden');
        if (e.deltaY > 0 && position !== c.length - 1) {
          position++
        } else if (e.deltaY < 0 && position !== 0) {
          position--
        }
        $('html, body').animate({
          scrollTop: window.innerHeight >= 400 ? $(c[position]).offset().top - 61 : $(c[position]).offset().top
        }, 800, function() {
          window.location.hash = c[position];
          window.scrollTo(0, window.innerHeight >= 400 ? $(c[position]).offset().top - 61 : $(c[position]).offset().top);
          document.addEventListener('wheel', sCroll);
          $('body').css('overflow', '');
        });
      }
    } else {
      console.log('do gory');
      document.removeEventListener('wheel', sCroll);
      if (window.scrollY === 0 || window.scrollY > $(c[position]).offset().top) {
        $('body').css('overflow', '');
        document.addEventListener('wheel', sCroll);
        console.log('scroll');
      } else if (window.scrollY <= $(c[position]).offset().top) {
        $('body').css('overflow', 'hidden');
        if (e.deltaY > 0 && position !== c.length - 1) {
          position++
        } else if (e.deltaY < 0 && position !== 0) {
          position--
        }
        $('html, body').animate({
          scrollTop: window.innerHeight >= 400 ? $(c[position]).offset().top - 61 : $(c[position]).offset().top
        }, 800, function() {
          window.location.hash = c[position];
          window.scrollTo(0, window.innerHeight >= 400 ? $(c[position]).offset().top - 61 : $(c[position]).offset().top);
          document.addEventListener('wheel', sCroll);
          $('body').css('overflow', '');
        });
      }
    }
  }


  document.addEventListener('wheel', sCroll);

  $(window).scroll((e) => {
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
        scrollTop: window.innerHeight >= 400 ? $(hash).offset().top - 61 : $(hash).offset().top
      }, 800, function() {
        window.location.hash = hash;
        window.scrollTo(0, window.innerHeight >= 400 ? $(hash).offset().top - 61 : $(hash).offset().top);
      });
    }
  });
});


$(window).click(function() {
  $('.collapse').collapse('hide');
})
