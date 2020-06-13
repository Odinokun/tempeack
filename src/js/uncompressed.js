// BEGIN Меню для навигации при разработке
//**************
// should be commented before production
//**************

$(document).ready(function ($) {
  pageWidget([
    'index',
    'results',
    'about',
    'how-it-works',
    'pricing',
    'contact',
    'log-in',
    'reset-password',
    'sign-up',
    'sign-up-2',
    'sign-up-lg',
  ]);
});

function pageWidget(pages) {
  var widgetWrap = $('<div class="widget_wrap"><ul class="widget_list"></ul></div>');
  widgetWrap.prependTo("body");
  for (var i = 0; i < pages.length; i++) {
    $('<li class="widget_item"><a class="widget_link" href="'
      + pages[i]
      + '.html'
      + '">'
      + pages[i]
      + '</a></li>').appendTo('.widget_list');
  }
  var widgetStilization = $('' +
    '<style>' +
    'body {position:relative} ' +
    '.widget_wrap{width:100vw;max-width: 450px;position:fixed;top:0;left:0;z-index:19999;padding:10px 20px;background:#222;border-bottom-right-radius:10px;' +
    '-webkit-transition:all .3s ease;transition:all .3s ease;' +
    '-webkit-transform:translate(-100%,0);' +
    '-ms-transform:translate(-100%,0);transform:translate(-100%,0)}' +
    '.widget_wrap:after{' +
    'content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;' +
    'background:#222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;' +
    'cursor:pointer;display: flex;}' +
    '.widget_wrap:hover{' +
    '-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}' +
    '.widget_list{display: flex;flex-wrap: wrap;}' +
    '.widget_item{padding:0 0 10px;width: 50%}' +
    '.widget_link{color:#fff;text-decoration:none;font-size:15px;}' +
    '.widget_link:hover{text-decoration:underline} ' +
    '</style>');
  widgetStilization.prependTo(".widget_wrap");
}

// END Меню для навигации при разработке

//====== Begin Programmer code ======
// $(function () {
//   let sliderRange = $('.slider-range');
//
//   for (let i = 0; i < sliderRange.length; i++) {
//     let slider = $(sliderRange[i]).children('.slider-range__scale');
//     let sliderInput = $(sliderRange[i]).children('.slider-range__input');
//     let minVal = $(sliderInput).data('min');
//     let maxVal = $(sliderInput).data('max');
//     let startVal = $(sliderInput).data('start');
//     let finishVal = $(sliderInput).data('finish');
//
//     $(slider).slider({
//       range: true,
//       min: minVal,
//       max: maxVal,
//       values: [startVal, finishVal],
//       slide: function (event, ui) {
//         //значение при перемещении
//         if (ui.values[0] < 10) {
//           ui.values[0] = '0' + ui.values[0];
//         }
//         if (ui.values[1] < 10) {
//           ui.values[1] = '0' + ui.values[1];
//         }
//         $(sliderInput).val(ui.values[0] + " - " + ui.values[1]);
//       }
//     });
//
//     //значение при загрузке
//     if ($(slider).slider("values", 0) < 10 && $(slider).slider("values", 1) < 10) {
//       $(sliderInput).val("0" + $(slider).slider("values", 0) + " - 0" + $(slider).slider("values", 1));
//     } else if ($(slider).slider("values", 0) < 10) {
//       $(sliderInput).val("0" + $(slider).slider("values", 0) + " - " + $(slider).slider("values", 1));
//     } else if ($(slider).slider("values", 1) < 10) {
//       $(sliderInput).val($(slider).slider("values", 0) + " - 0" + $(slider).slider("values", 1));
//     } else {
//       $(sliderInput).val($(slider).slider("values", 0) + " - " + $(slider).slider("values", 1));
//     }
//   }
//
// });


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

$('.slider-range .log-in-form__checkbox--check input').on('click', function () {
  $(this).parents('.slider-range').toggleClass('disabled');
});