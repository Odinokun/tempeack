module.exports = function () {

  //begin search-result
  $('.search-result__open').on('click', function (e) {
    e.preventDefault();
    $('.search-result').addClass('active');
    $('.page-header--search-result').addClass('active');
  });
  $('.search-result__icon-arrow').on('click', function (e) {
    e.preventDefault();
    $('.search-result').removeClass('active');
    $('.page-header--search-result').removeClass('active');
  });
  //end search-result

};