$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    $("#java").hide();
    $("#cssreact").hide();
    $("#cnet").hide();

    var inputName = $("input#name").val();
    var inputPlatform = $("input:radio[name=platform]:checked").val();

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
