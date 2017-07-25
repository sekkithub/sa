import $ from 'jquery';
import 'slick-carousel';
import ee from './ee';

const $carousels = $('.js-carousel');

function carouselsInit() {
  $carousels.each((i, el) => {
    $(el).slick({
      dots: false,
      fade: true,
      slidesToShow: 1,
      slide: '.js-carousel-slide',
      draggable: false,
      prevArrow: $(el).find('.js-carousel-prev'),
      nextArrow: $(el).find('.js-carousel-next'),
    });
  });
}

function init() {
  carouselsInit();
}

ee.addListener('init', init);
