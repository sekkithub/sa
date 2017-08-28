import $ from 'jquery';
import 'slick-carousel';
import ee from './ee';

export function indexingThumbnails() {
  $('.js-thumbnail-image').each((i, el) => {
    $(el).attr('data-index', i);
  });
}

function openSlideshow() {
  $('body').addClass('slideshow-active');
  const indexNumber = $(this).attr('data-index');
  $('.js-slideshow').slick('slickGoTo', indexNumber, true);
}

function clickEvent() {
  $(document).on('click', '.js-visuals-item img', openSlideshow);
}

export default function init() {
  indexingThumbnails();
  clickEvent();
}

ee.addListener('init', init);
