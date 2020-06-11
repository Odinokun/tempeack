module.exports = function() {

  //begin FAQ accordion

  $('.faq__question').on('click', function () {
    let question = $(this).parents('.faq__item');

    if (question.hasClass('active')) {
      $('.faq__item').removeClass('active');
      $('.faq__answer').slideUp();
    } else {
      $('.faq__item').removeClass('active');
      $('.faq__answer').slideUp();
      $(question).addClass('active');
      $(question).find('.faq__answer').slideDown();
    }
  });

  //end FAQ accordion

};