import $ from 'jquery';
import ee from './ee';

function init() {
  $('.js-mixcloud-iframe').each((i, el) => {
    const entrySlug = $(el).data('slug');
    const widget = Mixcloud.PlayerWidget(document.getElementById(entrySlug));

    widget.ready.then(() => {
      $('.js-mixcloud-player-controller').on('click', () => {
        widget.play();
      });
    });
  });
}

ee.addListener('init', init);
