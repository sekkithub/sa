import FastClick from 'fastclick';
import domready from 'domready';

import ee from './components/ee';

import './components/carousels';
import './components/accordion-nav';
// import './components/smooth-scrollbar';

FastClick.attach(document.body);

domready(() => {
  ee.emit('init');
});
