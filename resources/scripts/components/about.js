import $ from 'jquery';
import ee from './ee';

const $aboutCopyOpener = $('.js-about-copy-opener');
const $aboutBody = $('.js-about-body');

function openMoreCopy() {
  const aboutHeight = $('.js-about-copy').height();
  $aboutBody.addClass('active').height(aboutHeight);
}

function addReadMore() {
  const aboutHeight = $('.js-about-copy').height();
  if (aboutHeight < 180) {
    $aboutBody.addClass('active').height(aboutHeight);
  }
}

function init() {
  addReadMore();
  $aboutCopyOpener.click(openMoreCopy);
}

ee.addListener('init', init);
