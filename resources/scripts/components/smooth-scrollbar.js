import Scrollbar from 'smooth-scrollbar';
import ee from './ee';

function init() {
  Scrollbar.initAll({ speed: 0.4 });
}

ee.addListener('init', init);
