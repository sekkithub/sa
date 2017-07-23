import $ from 'jquery';
import 'slick-carousel';
import ee from './ee';

function carouselsInit() {
  const $carousels = $('.js-carousel');

  $carousels.each((i, el) => {
    $(el).not('.slick-initialized').slick({
      dots: false,
      fade: true,
      slidesToShow: 1,
      lazyLoad: 'progressive',
      touchThreshold: 10,
      slide: '.js-carousel-slide',
      draggable: false,
      prevArrow: '.js-carousel-prev',
      nextArrow: '.js-carousel-next',
    });

    $(el).on('beforeChange', (event, slick, currentSlide, nextSlide) => {
      const nextHeight = $(`.js-carousel-slide[data-slick-index="${nextSlide}"]`).height();
      $(el).parent('.js-accordion-nav-content').css('height', nextHeight);
    });
  });
}

function setHeight() {
  $('.js-carousel-slide').each((i, el) => {
    const assetHeight = $(el).find('.js-carousel-asset').height();
    const $detail = $(el).find('.js-accordion-nav-details');
    const foo = assetHeight + 96;
    $detail.css('min-height', foo);
  });
}

function init() {
  carouselsInit();

  setHeight();
  $(window).resize(setHeight);
  $(window).on('orientationchange', setHeight);
}

ee.addListener('init', init);
