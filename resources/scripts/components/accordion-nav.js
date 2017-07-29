import $ from 'jquery';
import ee from './ee';

function setHeight() {
  $('.js-accordion-nav-item.active').each((i, el) => {
    const activeCarouselHeight = $(el).find('.js-carousel-slide.slick-active').height();
    $(el).find('.js-accordion-nav-content').height(activeCarouselHeight);
  });
}

function openNav() {
  const $selectedItem = $(this).closest('.js-accordion-nav-item');
  if ($selectedItem.hasClass('active')) {
    $selectedItem.removeClass('active');
    $selectedItem.find('.js-accordion-nav-content').css('height', 0);
  } else {
    $selectedItem.addClass('active');
  }
}

function draw() {
  requestAnimationFrame(draw);
  setHeight();
}

function init() {
  $(document).off().on('click', '.js-accordion-nav-opener', openNav);
  draw();
}

ee.addListener('init', init);
