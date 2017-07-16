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

function setHeight() {
  if ($aboutBody.hasClass('active')) {
    const aboutHeight = $('.js-about-body.active .js-about-copy').height();
    $aboutBody.height(aboutHeight);
  }
}

function init() {
  addReadMore();
  $aboutCopyOpener.click(openMoreCopy);

  $(window).resize(setHeight);
  $(window).on('orientationchange', setHeight);
}

ee.addListener('init', init);
