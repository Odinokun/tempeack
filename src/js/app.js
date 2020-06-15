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

  // begin phone mask
  // require('./modules/maskedinput')();

  // begin Slick slider
  // require('./modules/slick')();

  // begin Popup
  // require('./modules/popup')();

  // begin Animate.css
  //РАБОТАЕТ ТОЛЬКО С JQUERY < 3.0.0 !!!!!!!!!!!!!!!!!!
  // require('./modules/waypoints')();
  // require('./modules/animateCss')();

});