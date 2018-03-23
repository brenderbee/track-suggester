$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

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
      $("#java").show();
    } else if (inputPlatform === "mobile" && inputWorkPlace === "money" || inputAndroid === "true"){
      $("#java").show();
    } else if (inputPlatform === "mobile" || inputWorkPlace === "money" && inputAndroid === "true"){
      $("#java").show();
//start of CSS/React conditions
    } else if (inputPlatform === "front" && inputWorkPlace === "startup" && inputRealTime === "true") {
      $("#cssreact").show();
    } else if (inputPlatform === "front" && inputWorkPlace === "startup" || inputRealTime === "true") {
      $("#cssreact").show();
    } else if (inputPlatform === "front" || inputWorkPlace === "startup" && inputRealTime === "true") {
      $("#cssreact").show();
//start of c#/.NET conditions
    } else if (inputPlatform === "back" && inputWorkPlace === "corporate" && inputGaming === "true") {
      $("#cnet").show();
    } else if (inputPlatform === "back" && inputWorkPlace === "corporate" || inputGaming === "true") {
      $("#cnet").show();
    } else if (inputPlatform === "back" || inputWorkPlace === "corporate" && inputGaming === "true") {
      $("#cnet").show();
    }

    $(".name").text(inputName);

  });
});
