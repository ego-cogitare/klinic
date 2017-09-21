
$(document).ready(function() {
  if ($('.swiper-wrapper .swiper-slide').length > 1) {
    var slider = new Swiper('.swiper-container', {
      direction: 'horizontal',
      slidesPerView: 1,
      pagination: '.swiper-pagination',
      paginationClickable: true,
      autoplay: 4000,
      loop: true,
      spaceBetween: 0,
      mousewheelControl: false,
      speed: 1000
    });
  }

  $('.c-hamburger').on('click', function() {
    var $menu = $('.nav');

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $menu.removeClass('opened');
    }
    else {
      $(this).addClass('active');
      $menu.addClass('opened');
    }
  });
});
