module.exports = function() {

  $('form').on('submit', function () {
    $(this).find('.button').addClass('disabled');
  })

};