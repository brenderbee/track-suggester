$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

//Hide results at the start of this function
    $("#java").hide();
    $("#cssreact").hide();
    $("#cnet").hide();

    var inputName = $("input#name").val();
    var inputPlatform = $("input:radio[name=platform]:checked").val();
    var inputWorkPlace = $("input:radio[name=workplace]:checked").val();
    var inputGaming = $("input:radio[name=gaming]:checked").val();
    var inputRealTime = $("input:radio[name=realtime]:checked").val();
    var inputAndroid = $("input:radio[name=android]:checked").val();

//start of Java/Android conditions
    if (inputPlatform === "mobile" && inputWorkPlace === "money" && inputAndroid === "true") {
      $("#survey").slideUp("slow");
      $("#java").fadeIn("slow");
    } else if (inputPlatform === "mobile" && inputWorkPlace === "money" || inputAndroid === "true"){
      $("#survey").slideUp("slow");
      $("#java").fadeIn("slow");
    } else if (inputPlatform === "mobile" || inputWorkPlace === "money" && inputAndroid === "true"){
      $("#survey").slideUp("slow");
      $("#java").fadeIn("slow");
    } else if (inputPlatform === "mobile" && inputWorkPlace === "startup" || inputAndroid === "tur") {
      $("#survey").slideUp("slow");
      $("#java").fadeIn("slow");
//start of CSS/React conditions
    } else if (inputPlatform === "front" && inputWorkPlace === "startup" && inputRealTime === "true") {
      $("#survey").slideUp("slow");
      $("#cssreact").fadeIn("slow");
    } else if (inputPlatform === "front" && inputWorkPlace === "startup" || inputRealTime === "true") {
      $("#survey").slideUp("slow");
      $("#cssreact").fadeIn("slow");
    } else if (inputPlatform === "front" || inputWorkPlace === "startup" && inputRealTime === "true") {
      $("#survey").slideUp("slow");
      $("#cssreact").fadeIn("slow");
//start of c#/.NET conditions
    } else if (inputPlatform === "back" && inputWorkPlace === "corporate" && inputGaming === "true") {
      $("#survey").slideUp("slow");
      $("#cnet").fadeIn("slow");
    } else if (inputPlatform === "back" && inputWorkPlace === "corporate" || inputGaming === "true") {
      $("#survey").slideUp("slow");
      $("#cnet").fadeIn("slow");
    } else if (inputPlatform === "back" || inputWorkPlace === "corporate" && inputGaming === "true") {
      $("#survey").slideUp("slow");
      $("#cnet").fadeIn("slow");
    } else {
      $("#survey").slideUp("slow");
      $("#cnet").fadeIn("slow");
    }

    $(".name").text(inputName);

  });

});

// $(".result").submit(function(event) {
//   event.preventDefault();
//
//   $("#java").fadeOut("slow");
//   $("#cssreact").fadeOut("slow");
//   $("#cnet").fadeOut("slow");
//
//   $("#survey").fadeIn("slow");
// });
