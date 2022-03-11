module.exports = function () {

  // begin slider-range
  $(function () {
    let sliderRange = $('.slider-range-single');

    for (let i = 0; i < sliderRange.length; i++) {
      let slider = $(sliderRange[i]).children('.slider-range-single__scale');
      let sliderInputFinish = $(sliderRange[i]).find('.slider-range-single__input--finish');
      let maxVal = $(sliderInputFinish).data('max');
      let finishVal = $(sliderInputFinish).data('finish');

      $(slider).slider({
        range: true,
        min: 0,
        max: maxVal,
        values: [0, finishVal],
        slide: function (event, ui) {
          //значение inputs при перемещении ползунков
          if (ui.values[1] < 10 && ui.values[1] !== 0) {
            ui.values[1] = '0' + ui.values[1];
          }
          $(sliderInputFinish).val(ui.values[1]);

          if (ui.values[1] < 3) {
            $(slider).addClass('minval')
          } else {
            $(slider).removeClass('minval')
          }
        }
      });

      //значение при загрузке (right input)
      if ($(slider).slider("values", 1) < 3) {
        $(slider).addClass('minval')
      } else {
        $(slider).removeClass('minval')
      }

      if ($(slider).slider("values", 1) < 10 && $(slider).slider("values", 1) !== 0) {
        $(sliderInputFinish).val("0" + $(slider).slider("values", 1));
      } else {
        $(sliderInputFinish).val($(slider).slider("values", 1));
      }
    }

  });
};