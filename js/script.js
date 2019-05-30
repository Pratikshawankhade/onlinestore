$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var addressInput = $("input#address").val();
    var credit-cardInput= $("input#credit-card").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();
    var beverage = $("#country").val();
    var flavor = $("input:radio[name=flavor]:checked").val();


    $(".person1").text(person1Input);
    $(".address").text(addressInput);
    $(".credit-card").text(credit-cardInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });
});
