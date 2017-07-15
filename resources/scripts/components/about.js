import $ from 'jquery';
import ee from './ee';

const $aboutCopyOpener = $('.js-about-copy-opener');
const aboutHeight = $('.js-about-copy').height();
const $aboutBody = $('.js-about-body');

function openMoreCopy() {
  $aboutBody.addClass('active').height(aboutHeight);
}

function addReadMore() {
  if (aboutHeight < 180) {
    $aboutBody.addClass('active').height(aboutHeight);
  }
}

function init() {
  addReadMore();
  $aboutCopyOpener.click(openMoreCopy);
}

ee.addListener('init', init);
