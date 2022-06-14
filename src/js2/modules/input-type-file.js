module.exports = function() {

  $('input[type="file"]').on('change', function () {
    const wrap = $(this).parent('.form-group');

    if( this.value ){
      $(wrap).addClass('active');
      // console.log( "Оппа, выбрали файл!" );
      // console.log( this.value );
    } else {
      // console.log( "Файл не выбран" );
    }
  })

  $('.form-group__delete-file').on('click', function (){
    const wrap = $(this).parent('.form-group');
    const input = $(wrap).find('input');

    $(wrap).removeClass('active');
    $(input).val('');
  })

};