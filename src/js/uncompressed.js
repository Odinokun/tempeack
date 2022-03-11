// BEGIN Меню для навигации при разработке
//**************
// should be commented before production
//**************

$(document).ready(function ($) {
  pageWidget([
    '2022-edit-b-profile-3',
    '2022-edit-b-profile-2',
    '2022-edit-b-profile',
    '2022-request-person',
    '2022-requests',
    '2022-sign-up',
    '2022-log-in',
    '2022-pricing',
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
    'sign-up-lg-2',
    'search-contractor',
    'search-contractor-2',
    'search-results',
    'profile-clinic',
    'profile-person',
    'edit-profile-business',
    'edit-profile-person',
    'change-password',
    'delete-profile',
    'change-subscription',
    'change-subscription-2',
    'requests-person',
    'requests-business',
    'request-person-1',
    'request-person-2',
    'request-person-3',
    'request-person-4',
    'request-person-5',
    'request-person-6',
    'request-clinic-1',
    'request-clinic-2',
    'request-clinic-3',
    'request-clinic-4',
    'request-clinic-5',
    '404',
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


//begin menu
$('.search-result__open').on('click', function (e) {
  e.preventDefault();
  $('.search-result').addClass('active');
});
$('.search-result__icon-arrow').on('click', function (e) {
  e.preventDefault();
  $('.search-result').removeClass('active');
});
//end menu