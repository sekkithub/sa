import Layzr from 'layzr.js';
import ee from './ee';

let instance;

function addListener() {
  instance.update().check().handlers(true);
}

function layzrSetup() {
  instance = Layzr({
    normal: 'data-normal',
  });
}

function init() {
  layzrSetup();
  addListener();
}

ee.addListener('init', init);
