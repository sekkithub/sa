import $ from 'jquery';
import 'slick-carousel';
import ee from './ee';

function carouselsInit() {
  const $carousels = $('.js-carousel');

  $carousels.each(function begin() {
    $(this).not('.slick-initialized').slick({
      arrows: true,
      dots: true,
      fade: true,
      slidesToShow: 1,
      lazyLoad: 'progressive',
      touchThreshold: 10,
      slide: '.js-carousel-slide',
      draggable: false,
      prevArrow: '.js-carousel-prev',
      nextArrow: '.js-carousel-next',
    });
  });
}

function init() {
  carouselsInit();
}

ee.addListener('init', init);
