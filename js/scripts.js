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


    if (inputPlatform === "mobile") {
      $("#java").show();
    } else if (inputPlatform === "front") {
      $("#cssreact").show();
    } else {
      $("#cnet").show();
    }

    $(".name").text(inputName);

  });
});
