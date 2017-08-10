import $ from 'jquery';
import imagesLoaded from 'imagesloaded';
import ee from './ee';

function isLoaded() {
  $('html').removeClass('no-scroll');
  $('body').addClass('isLoaded');
}

function init() {
  imagesLoaded('body', isLoaded);
}

ee.addListener('init', init);
