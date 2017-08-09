import $ from 'jquery';
import { bgMute } from '../components/bg-music';
import ee from './ee';

function mixcloudPlayer() {
  let widget;
  let entrySlug;

  $('.js-mixcloud-player-controller').each((i, el) => {
    $(el).on('click', () => {
      entrySlug = $(el).data('slug');
      widget = Mixcloud.PlayerWidget(document.getElementById(entrySlug));

      widget.ready.then(() => {
        function isPlaying() {
          return $(el).hasClass('playing');
        }

        if (!isPlaying()) {
          bgMute();
          widget.play();
          $('.js-mixcloud-player-controller').not(el).removeClass('playing');
          $(el).addClass('playing');
        } else {
          widget.pause();
          $(el).removeClass('playing');
        }
      });
    });
  });
}

function init() {
  mixcloudPlayer();
}

ee.addListener('init', init);
