import $ from 'jquery';
import 'slick-carousel';
import ee from './ee';

const $carousels = $('.js-carousel');

function carouselsInit() {
  $carousels.each((i, el) => {
    $(el).slick({
      dots: false,
      fade: true,
      adaptiveHeight: true,
      slidesToShow: 1,
      lazyLoad: 'progressive',
      touchThreshold: 10,
      slide: '.js-carousel-slide',
      draggable: false,
      prevArrow: $(el).find('.js-carousel-prev'),
      nextArrow: $(el).find('.js-carousel-next'),
    });

    $(el).on('beforeChange', (event, slick, currentSlide, nextSlide) => {
      const $nextSlide = $(`.js-carousel-slide[data-slick-index="${nextSlide}"]`);
      const nextSlideHeight = $nextSlide.height();
      $(el).parent('.js-accordion-nav-content').height(nextSlideHeight);
      $nextSlide.find('.js-carousel-right-item').height(nextSlideHeight);
      console.log(nextSlideHeight);
    });
  });
}

function setHeight() {
  $carousels.each((i, el) => {
    if ($(el).closest('.js-accordion-nav-item').hasClass('active')) {
      const currentSlideIndex = $(el).slick('slickCurrentSlide');
      const $currentSlide = $(`.js-carousel-slide[data-slick-index="${currentSlideIndex}"]`);
      const currentSlideHeight = $currentSlide.height();
      $(el).parent('.js-accordion-nav-content').height(currentSlideHeight);
      $currentSlide.find('.js-carousel-right-item').height(currentSlideHeight);
      // console.log(currentSlideHeight);
    }
  });
}

function init() {
  carouselsInit();

  $(window).resize(setHeight);
  // $(window).on('orientationchange', setHeight);
}

ee.addListener('init', init);
