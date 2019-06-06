//this code will run after everything loads
$(document).ready(function(){
  $("#ageForm").submit(function(event){
    var userAge = parseInt($("#age").val());
    if(userAge >= 18 && userAge <= 21) {
      $(".section1").show();
    } else if(userAge > 21){
      $(".section2").show();
    } else {
      $(".section3").show();
    }
    event.preventDefault();
  });
});
