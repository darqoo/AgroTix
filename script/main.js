window.addEventListener('load', () => {
  $("#loader").animate({
    opacity: 0
  }, 1000,'linear', () => $("#loader").hide())
});

(() => {
    $(document).ready(() => {
        $(".top_menu").hide();
        $(() => {
            $(window).scroll(() => {
                if ($(this).scrollTop() > 200) {
                    $('.top_menu').fadeIn();
                } else {
                    $('.top_menu').fadeOut();
                }
            });
        });

    });
})();
