import $ from 'jquery';
// import slickLightbox from 'slick-lightbox';
import ee from './ee';

function init() {
  $('.c-visuals__content').slickLightbox({
    itemSelector: '> .js-visuals-item',
  });
}

ee.addListener('init', init);
