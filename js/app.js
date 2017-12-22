$(document).ready(function(){
  var btnDisabled = $("#submit");
   btnDisabled.attr('disabled',true);

  var inputPassword = $("#password");
   $(password).keydown(function() {
     if(inputPassword.val().length >= 5){
       $(".secondSpan").hide();
     };
 });

  var confirmPassword = $("#confirm_password");
  $(confirmPassword).keydown(function(){
    if(confirmPassword.val()===inputPassword.val()){
      $(".thrirdSpan").hide();
    }
  })
})
