module.exports = function() {

  //begin FAQ tabs
  $('.faq__buttons .button').on('click', function (e) {
    e.preventDefault();
    let tabVal = $(this).data('tab');

    $('.faq__buttons .button').removeClass('active');
    $('.faq__tab').fadeOut();

    $(this).addClass('active');
    $(tabVal).fadeIn();
  });
  //end FAQ tabs

};