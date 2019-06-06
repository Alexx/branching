//this code will run after everything loads
$(document).ready(function(){
  $("#ageForm").submit(function(event){
    var animalType = $(".animals").val();

    console.log(animalType);
    if(animalType === "Elephant") {
      $(".sec-monkey").hide();
      $(".sec-lion").hide();
      $(".sec-elephant").show();
    } else if(animalType === "Monkey") {
      $(".sec-elephant").hide();
      $(".sec-lion").hide();
      $(".sec-monkey").show();
    } else if(animalType === "Lion") {
      $(".sec-elephant").hide();
      $(".sec-monkey").hide();
      $(".sec-lion").show();
    }
    event.preventDefault();
  });


    // var userAge = parseInt($("#age").val());
    // if(userAge >= 18 && userAge <= 21) {
    //   $(".section1").show();
    // } else if(userAge > 21){
    //   $(".section2").show();
    // } else {
    //   $(".section3").show();
  //   }
  //   event.preventDefault();
  // });
});
