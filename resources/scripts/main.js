import FastClick from 'fastclick';
import domready from 'domready';

import ee from './components/ee';

import './components/carousels';

FastClick.attach(document.body);

domready(() => {
  ee.emit('init');
});
