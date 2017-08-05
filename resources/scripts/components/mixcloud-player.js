import $ from 'jquery';
import ee from './ee';

function init() {
  const widget = Mixcloud.PlayerWidget(document.getElementById('foo'));

  widget.ready.then(() => {
    $('.c-mixcloud-player__controller').on('click', () => {
      console.log('clicked');
      widget.play();
    });
  });
}

ee.addListener('init', init);
