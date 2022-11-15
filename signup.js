var check_blank = function() {
  if ($('.info-signup-name').val().length >= 4 && $('.info-signup-email').val().length >= 4 && $('.info-signup-pw').val() != '' && $('.info-signup-pwcheck').val() != '') {
      $('.signup-submit').prop('disabled', false);
      $('.signup-submit').css("cursor","pointer");
      $('.signup-submit').css("background","#43BE48")
      $('.signup-submit').css("color","#FFFFFF")
  }
  else {
      $('.signup-submit').prop('disabled', true);
      $('.signup-submit').css("cursor","Default");
      $('.signup-submit').css("background","#E6E6E6")
      $('.signup-submit').css("color","#818181")
  }
}

var checkpw = function() {
    if($('.info-signup-pw').val() != $('.info-signup-pwcheck').val()) {
      return alert('errrr');
      $.ajax({
        type:'POST',
        url:'http://192.180.0.1:5000/signup',
        data:{
          useremail: $('.user-signup-email').val(),
          username: $('.user-signup-name').val(),
          userpw: $('.user-signup-pw').val()
        }
      })
    }
    else {
      return alert('yesssssssss');
    }
}

$(document).ready(function () {
    $('.info-signup-name').on('input change', function () {
        check_blank();
    });
});
$(document).ready(function () {
    $('.info-signup-pw').on('input change', function () {
        check_blank();
    });
});
$(document).ready(function () {
    $('.info-signup-email').on('input change', function () {
      check_blank();
    });
});
$(document).ready(function () {
    $('.info-signup-pwcheck').on('input change', function () {
        check_blank();
    });
});
