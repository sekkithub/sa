import $ from 'jquery';
import ee from './ee';

function openNav() {
  const $selectedItem = $(this).closest('.js-accordion-nav-item');

  if ($selectedItem.hasClass('active')) {
    $selectedItem.removeClass('active');
    // $selectedItem.find('.js-carousel').css('min-height', 0);
  } else {
    $selectedItem.addClass('active');
    // const activeCarouselHeight = $selectedItem.find('.slick-active').height();
    // $selectedItem.find('.js-carousel').css('min-height', activeCarouselHeight);
  }
}

function init() {
  $(document).off().on('click', '.js-accordion-nav-opener', openNav);
}

ee.addListener('init', init);
