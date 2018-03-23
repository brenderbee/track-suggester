$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputName = $("input#name").val();

    $("#result").show();
    $("span.name").text(inputName);

  });
});
