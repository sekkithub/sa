import $ from 'jquery';
import 'slick-carousel';
import ee from './ee';

function slideshowInit() {
  $('.js-slideshow').not('.slick-initialized').slick({
    dots: false,
    slidesToShow: 1,
    lazyLoad: 'progressive',
    touchThreshold: 2,
    slide: '.js-slideshow-slide',
    prevArrow: '.js-slideshow-prev',
    nextArrow: '.js-slideshow-next',
    speed: 400,
    infinite: false,
    swipeToSlide: true,
  });
}

function closeSlideshow() {
  $('body').removeClass('slideshow-active');
}

function setHeight() {
  const windowHeight = $(window).height();
  $('.js-slideshow-slide').height(windowHeight);
}

function resizeEvent() {
  $(window).resize(setHeight);
  $(window).on('orientationchange', setHeight);
  $(document).on('click', '.js-slideshow-close', closeSlideshow);
}

export default function init() {
  slideshowInit();
  setHeight();
  resizeEvent();
}

ee.addListener('init', init);
