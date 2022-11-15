var check_blank = function(){
  if ($('.info-signin-ne').val().length >= 4 && $('.info-signin-pw').val() != '') {
      $('.signin-submit').prop('disabled', false);
      $('.signin-submit').css("cursor","pointer");
      $('.signin-submit').css("background","#43BE48")
      $('.signin-submit').css("color","#FFFFFF")
  }
  else {
      $('.signin-submit').prop('disabled', true);
      $('.signin-submit').css("cursor","Default");
      $('.signin-submit').css("background","#E6E6E6")
      $('.signin-submit').css("color","#818181")
  }
}

$(document).ready(function () {
    $('.info-signin-ne').on('input change', function () {
        check_blank();
    });
});
$(document).ready(function () {
    $('.info-signin-pw').on('input change', function () {
        check_blank();
    });
});
