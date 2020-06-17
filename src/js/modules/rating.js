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

  //begin CLICK rating
  $('.rating-star--transparent').on('click', function () {
    let clickRating = $(this).data('rating');
    let filter = $('.click-rating__stars').find('.person-card-rating__filter');
    let transformVal = clickRating / (5 / 100);

    $(filter).css('transform', 'translateX(' + transformVal + '%)');
  });
  //end CLICK rating

};