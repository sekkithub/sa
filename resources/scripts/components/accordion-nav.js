import $ from 'jquery';
import ee from './ee';

// const $navOpener = $('.js-accordion-nav-opener');

function openNav() {
  if ($(this).closest('.js-accordion-nav-item').hasClass('active')) {
    $(this).closest('.js-accordion-nav-item').removeClass('active');
  } else {
    $(this).closest('.js-accordion-nav-item').addClass('active');
  }
}

function init() {
  $(document).off().on('click', '.js-accordion-nav-opener', openNav);
}

ee.addListener('init', init);


// function isOpen() {
//   return $body.hasClass(activeFlagName);
// }

// function openNav() {
//   $body.addClass(activeFlagName);
// }

// function closeNav() {
//   $body.removeClass(activeFlagName);
// }

// function toggleNav() {
//   if (!isOpen()) {
//     openNav();
//   } else {
//     closeNav();
//   }
// }
