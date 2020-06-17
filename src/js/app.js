$(function() {

  // begin SVG for IE
  require('./modules/svg4everybody')();

  // begin menu
  require('./modules/menu')();

  // begin FAQ tabs
  require('./modules/tab')();

  // begin FAQ accordion
  require('./modules/accordion')();

  // begin range slider
  require('./modules/slider-range')();
  require('./modules/slider-range-single')();

  // begin star rating
  require('./modules/rating')();

  // begin subscription indicator
  require('./modules/indicator')();

  // begin phone mask
  // require('./modules/maskedinput')();

});