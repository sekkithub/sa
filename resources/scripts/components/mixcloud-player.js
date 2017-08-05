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
  const widget = Mixcloud.PlayerWidget(document.getElementById('foo'));
  widget.ready.then(() => {
    $('.haha').on('click', () => {
      widget.play();
    });
  });
}

ee.addListener('init', init);
