module.exports = function() {

  // begin subscription indicator

  $(window).on('load', function () {
    let indicatorVal = $('.profile-clinic__subscription-indicator').data('percent');
    let indicator = $('.profile-clinic__subscription-indicator-highlight');
    let indicatorText = $(indicator).find('span');

    $(indicator).css('width', indicatorVal + '%');
    $(indicatorText).text(indicatorVal + '%');

  });
  // end subscription indicator

};