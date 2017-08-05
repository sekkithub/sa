import $ from 'jquery';
import ee from './ee';

const $body = $('body');
const mutedBgMusic = 'muted-bg-mucic';

function isMuted() {
  return $body.hasClass(mutedBgMusic);
}

export function bgMute() {
  $body.addClass(mutedBgMusic);
  $('.js-bg-music').animate({ volume: 0 }, 500);
}

function bgPlay() {
  $body.removeClass(mutedBgMusic);
  $('.js-bg-music').animate({ volume: 1 }, 500);
}

function toggleBgMusic() {
  if (!isMuted()) {
    bgMute();
  } else {
    bgPlay();
  }
}

function addHandlers() {
  $(document).on('click', '.js-bg-music-control', toggleBgMusic);
}

export default function init() {
  addHandlers();
}

function destroy() {
  $(document).off('click');
}

ee.addListener('init', init);
ee.addListener('destroy', destroy);
