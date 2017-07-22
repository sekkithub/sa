import $ from 'jquery';
import ee from './ee';

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
