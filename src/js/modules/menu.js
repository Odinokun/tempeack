module.exports = function() {

  //begin menu
  $('#burger-open').on('click', function (e) {
    e.preventDefault();
    $('#header__mobile-menu-wrap').addClass('active');
  });
  $('#burger-close').on('click', function (e) {
    e.preventDefault();
    $('#header__mobile-menu-wrap').removeClass('active');
  });
  //end menu

};