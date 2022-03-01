module.exports = function() {

  //begin log-in tabs
  $('.sign-up-form__tab-button').on('click', function (e) {
    e.preventDefault();
    let tabVal = $(this).data('tab');

    $('.sign-up-form__tab-button').removeClass('active');
    $('.sign-up-form__body').fadeOut(0);

    $(this).addClass('active');
    $(tabVal).fadeIn();

  });
  //end log-in tabs

};