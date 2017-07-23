import $ from 'jquery';
import ee from './ee';

// function setHeight() {
//   if ($selectedItem.hasClass('active')) {
//     const activeCarouselHeight = $selectedItem.find('.slick-active').height();
//     $selectedItem.find('.js-accordion-nav-content').css('height', activeCarouselHeight);
//   }
// }

function openNav() {
  const $selectedItem = $(this).closest('.js-accordion-nav-item');
  if ($selectedItem.hasClass('active')) {
    $selectedItem.removeClass('active');
    $selectedItem.find('.js-accordion-nav-content').css('height', 0);
  } else {
    $selectedItem.addClass('active');
    const activeCarouselHeight = $selectedItem.find('.slick-active').height();
    $selectedItem.find('.js-accordion-nav-content').css('height', activeCarouselHeight);
  }
}

function init() {
  $(document).off().on('click', '.js-accordion-nav-opener', openNav);
  // setHeight();
  // $(window).resize(setHeight);
  // $(window).on('orientationchange', setHeight);
}

ee.addListener('init', init);
