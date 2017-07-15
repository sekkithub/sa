import $ from 'jquery';
import ee from './ee';

const $aboutCopyOpener = $('.js-about-copy-opener');

function openMoreCopy() {
  console.log('open');
  const aboutHeight = $('.js-about-copy').height();
  $('.js-about-body').addClass('active').height(aboutHeight);
  // if ($(this).closest('.js-accordion-nav-item').hasClass('active')) {
  //   $(this).closest('.js-accordion-nav-item').removeClass('active');
  // } else {
  //   $(this).closest('.js-accordion-nav-item').addClass('active');
  // }
}

function init() {
  $aboutCopyOpener.click(openMoreCopy);
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
