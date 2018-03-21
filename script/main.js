window.addEventListener('load', () => {
  $("#loader").animate({
    opacity: 0
  }, 1000, 'linear', () => $("#loader").hide())
});

$(document).ready(() => {

  let a = $('.nav-item a')
  let c = [];
  let position = 0;

  for (let i = 0; i < a.length; i++) {
    c.push(a[i].hash);
  }

  c.indexOf(window.location.hash) == -1 ? window.location.hash = c[0] : position = c.indexOf(window.location.hash)

  let smoothScroll = (position) => {
    $('html, body').animate({
      scrollTop: window.innerHeight >= 400 ? $(c[position]).offset().top - 61 : $(c[position]).offset().top
    }, 800, function() {
      window.location.hash = c[position];
      window.scrollTo(0, window.innerHeight >= 400 ? $(c[position]).offset().top - 61 : $(c[position]).offset().top);
      document.addEventListener('wheel', sCroll);
    });
  }

  let sCroll = (e) => {
    let posEndContent = window.scrollY + window.innerHeight;
    let posHash = $(c[position]).offset().top + $(c[position]).innerHeight();
    let cPosition = $(c[position]).offset().top;

    document.removeEventListener('wheel', sCroll);

    let startScrolling = () => {
      $('body').css('overflow', '');
      document.addEventListener('wheel', sCroll);
    }

    if (e.deltaY > 0) {
      if (posEndContent < posHash || posEndContent === $(c[c.length - 1]).offset().top + $(c[c.length - 1]).innerHeight()) {
        startScrolling();
      } else if (posEndContent >= posHash && position !== c.length - 1) {
        $('body').css('overflow', 'hidden');
        position !== c.length - 1 ? position++ : null;
        smoothScroll(position);
      }
    } else if (e.deltaY < 0) {
      if (window.scrollY === 0 || window.scrollY > cPosition) {
        startScrolling();
      } else if (window.scrollY <= cPosition) {
        $('body').css('overflow', 'hidden');
        position !== 0 ? position-- : null;
        smoothScroll(position);
      }
    }
  }

  window.navigator.maxTouchPoints < 1 ? document.addEventListener('wheel', sCroll) : null;

  $(window).scroll((e) => {
    $(window).scrollTop() == 0 || window.scrollY + window.innerHeight === document.body.offsetHeight ? $('.bottom-menu').fadeIn() : $('.bottom-menu').fadeOut()
  });

  $("a").on('click', function(event) {
    event.preventDefault();
    position = c.indexOf(this.hash);
    smoothScroll(position);
  });
});

$(window).click(() => $('.collapse').collapse('hide'))
