import $ from 'jquery';
import ee from './ee';

function setHeight() {
  $('.js-accordion-nav-item.active').each((i, el) => {
    const iframWidth = $(el).find('.js-mixcloud-iframe').width() - 6;
    $(el).find('.js-mixcloud-iframe').height(iframWidth);
  });
}

function draw() {
  requestAnimationFrame(draw);
  setHeight();
}

function init() {
  draw();
}

ee.addListener('init', init);
