import FastClick from 'fastclick';
import domready from 'domready';

import ee from './components/ee';

import './components/about';
import './components/accordion-nav';
import './components/carousels';
import './components/thumbnails';
import './components/preloader';
// import './components/smooth-scrollbar';
import './components/visuals';
import './components/bg-music';
import './components/mixcloud-player';
import './components/three';
import './components/slideshow';

import './libs/soundcloud.player.api';
import './libs/sc-player';

FastClick.attach(document.body);

domready(() => {
  ee.emit('init');
});
