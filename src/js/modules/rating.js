module.exports = function() {

  // begin rating
  $(window).on('load', function () {
    let ratingWrap = $('.person-card-rating');

    for (let i = 0; i < ratingWrap.length; i++) {
      let rating = $(ratingWrap[i]).data('rating');
      let filter = $(ratingWrap[i]).find('.person-card-rating__filter');
      let transformVal = rating / (5 / 100);

      let ratingValText = $(ratingWrap[i]).find('.person-card-rating__value');

      $(filter).css('transform', 'translateX(' + transformVal + '%)');
      //выводим значение рейтинга текстом
      $(ratingValText).text(rating);
    }
  });
  // end rating

};