module.exports = function() {

  // begin slider-range
  $(function () {
    let sliderRange = $('.slider-range');

    for (let i = 0; i < sliderRange.length; i++) {
      let slider = $(sliderRange[i]).children('.slider-range__scale');
      let sliderInputStart = $(sliderRange[i]).find('.slider-range__input--start');
      let sliderInputFinish = $(sliderRange[i]).find('.slider-range__input--finish');
      let minVal = $(sliderInputStart).data('min');
      let maxVal = $(sliderInputFinish).data('max');
      let startVal = $(sliderInputStart).data('start');
      let finishVal = $(sliderInputFinish).data('finish');

      $(slider).slider({
        range: true,
        min: minVal,
        max: maxVal,
        values: [startVal, finishVal],
        slide: function (event, ui) {
          //значение inputs при перемещении ползунков
          if (ui.values[0] < 10) {
            ui.values[0] = '0' + ui.values[0];
          }
          if (ui.values[1] < 10) {
            ui.values[1] = '0' + ui.values[1];
          }
          $(sliderInputStart).val(ui.values[0]);
          $(sliderInputFinish).val(ui.values[1]);
        }
      });

      //значение при загрузке (left input)
      if ($(slider).slider("values", 0) < 10) {
        $(sliderInputStart).val("0" + $(slider).slider("values", 0));
      } else {
        $(sliderInputStart).val($(slider).slider("values", 0));
      }

      //значение при загрузке (right input)
      if ($(slider).slider("values", 1) < 10) {
        $(sliderInputFinish).val("0" + $(slider).slider("values", 1));
      } else {
        $(sliderInputFinish).val($(slider).slider("values", 1));
      }
    }

  });

  //toggle disabled
  $('.slider-range .log-in-form__checkbox--check input').on('click', function () {
    $(this).parents('.slider-range').toggleClass('disabled');
  });
  // end slider-range

};