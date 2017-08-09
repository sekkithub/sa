import $ from 'jquery';
import imagesLoaded from 'imagesloaded';
import ee from './ee';

const $html = $('html');
const $body = $('body');

function isLoaded() {
  $body.addClass('isLoaded');
  $html.removeClass('no-scroll');
}

function hidePreloader() {
  $body.removeClass('active-preloader');
}

export default function init() {
  imagesLoaded($body, () => {
    setTimeout(hidePreloader, 400);
    setTimeout(isLoaded, 1000);
  });
}

ee.addListener('init', init);
