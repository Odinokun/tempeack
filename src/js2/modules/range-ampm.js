module.exports = function () {

  // begin slider-range
  $(function () {

    let sliderRange = $('.slider-range-ampm');

    for (let i = 0; i < sliderRange.length; i++) {
      let slider = $(sliderRange[i]).children('.slider-range__scale-ampm');
      let sliderInputStart = $(sliderRange[i]).find('.slider-range__input-ampm--start');
      let sliderInputFinish = $(sliderRange[i]).find('.slider-range__input-ampm--finish');
      let startVal = $(sliderInputStart).data('start');
      let finishVal = $(sliderInputFinish).data('finish');

      $(slider).slider({
        range: true,
        min: 0,
        max: 1440,
        step: 15,
        values: [startVal, finishVal],
        slide: function (e, ui) {
          let hours1 = Math.floor(ui.values[0] / 60);
          let minutes1 = ui.values[0] - (hours1 * 60);

          if (minutes1 === 0) minutes1 = '00';
          if (hours1 >= 12) {
            if (hours1 === 12) {
              minutes1 = minutes1 + " PM";
            } else {
              hours1 = hours1 - 12;
              minutes1 = minutes1 + " PM";
            }
          } else {
            minutes1 = minutes1 + " AM";
          }

          if (hours1 === 0) {
            hours1 = 12;
          }

          if (hours1 < 10) hours1 = '0' + hours1
          if (minutes1 < 10) minutes1 = '0' + minutes1

          $(sliderInputStart).val(hours1 + ':' + minutes1);

          let hours2 = Math.floor(ui.values[1] / 60);
          let minutes2 = ui.values[1] - (hours2 * 60);

          if (minutes2 === 0) minutes2 = '00';
          if (hours2 >= 12) {
            if (hours2 === 12) {
              minutes2 = minutes2 + " PM";
            } else if (hours2 === 24) {
              hours2 = 11;
              minutes2 = "59 PM";
            } else {
              hours2 = hours2 - 12;
              minutes2 = minutes2 + " PM";
            }
          } else {
            minutes2 = minutes2 + " AM";
          }

          if (hours2 < 10) hours2 = '0' + hours2
          $(sliderInputFinish).val(hours2 + ':' + minutes2);
        }
      });

      //значение при загрузке (left input)
      function setStartVal() {
        let hours1 = Math.floor(startVal / 60);
        let minutes1 = startVal - (hours1 * 60);

        if (minutes1 === 0) minutes1 = '00';
        if (hours1 >= 12) {
          if (hours1 === 12) {
            minutes1 = minutes1 + " PM";
          } else {
            hours1 = hours1 - 12;
            minutes1 = minutes1 + " PM";
          }
        } else {
          minutes1 = minutes1 + " AM";
        }

        if (hours1 === 0) {
          hours1 = 12;
        }

        if (hours1 < 10) hours1 = '0' + hours1
        if (minutes1 < 10) minutes1 = '0' + minutes1

        $(sliderInputStart).val(hours1 + ':' + minutes1);
      }

      setStartVal();

      //значение при загрузке (right input)
      function setFinishVal() {
        let hours2 = Math.floor(finishVal / 60);
        let minutes2 = finishVal - (hours2 * 60);

        if (minutes2 === 0) minutes2 = '00';
        if (hours2 >= 12) {
          if (hours2 === 12) {
            minutes2 = minutes2 + " PM";
          } else if (hours2 === 24) {
            hours2 = 11;
            minutes2 = "59 PM";
          } else {
            hours2 = hours2 - 12;
            minutes2 = minutes2 + " PM";
          }
        } else {
          minutes2 = minutes2 + " AM";
        }

        if (hours2 < 10) hours2 = '0' + hours2
        $(sliderInputFinish).val(hours2 + ':' + minutes2);
      }

      setFinishVal();
    }

  });

  //toggle disabled
  $('.slider-range-ampm .log-in-form__checkbox--check input').on('click', function () {
    let wrap = $(this).parents('.slider-range-ampm');

    $(wrap).toggleClass('disabled');
    if ($(wrap).find('.slider-range__input-ampm').prop("disabled")) {
      $(wrap).find('.slider-range__input-ampm').prop("disabled", false);
    } else {
      $(wrap).find('.slider-range__input-ampm').prop("disabled", true);
    }
  });
  // end slider-range

};