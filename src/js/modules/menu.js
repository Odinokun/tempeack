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

  //begin page-header-menu
  $('.page-header-menu').on('click', function () {
    $(this).toggleClass('active');
  });

  $(document).mouseup(function (e) {
    let container = $(".page-header-menu");

    if (container.has(e.target).length === 0){
      container.removeClass('active');
    }
  });
  //end page-header-menu

};