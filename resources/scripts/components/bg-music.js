import $ from 'jquery';
import ee from './ee';

const $body = $('body');
const mutedBgMusic = 'muted-bg-mucic';

function isMuted() {
  return $body.hasClass(mutedBgMusic);
}

function mute() {
  $body.addClass(mutedBgMusic);
  $('.js-bg-music').animate({ volume: 0 }, 500);
}

function play() {
  $body.removeClass(mutedBgMusic);
  $('.js-bg-music').animate({ volume: 1 }, 500);
}

function toggleBgMusic() {
  if (!isMuted()) {
    mute();
  } else {
    play();
  }
}

function addHandlers() {
  $(document).on('click', '.js-toggle-bg-music', toggleBgMusic);
}

function init() {
  addHandlers();
}

function destroy() {
  $(document).off('click');
}

ee.addListener('init', init);
ee.addListener('destroy', destroy);
