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

function pauseListener() {
  console.log('paused');
}

function playListener() {
  console.log('playing');
}

function init() {
  draw();
  const widget = Mixcloud.PlayerWidget(document.getElementById('foo'));

  widget.ready.then(() => {
    $('.haha').on('click', () => {
      console.log('clicked');
      widget.play();
    });

    widget.events.pause.on(pauseListener);
    widget.events.play.on(playListener);
  });
}

ee.addListener('init', init);
