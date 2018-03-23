$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    $("#java").hide();
    $("#cssreact").hide();
    $("#cnet").hide();

    var inputName = $("input#name").val();
    var inputPlatform = $("input:radio[name=platform]:checked").val();



    $("#java").show();
    $("#cssreact").show();
    $("#cnet").show();
    $(".name").text(inputName);

  });
});
