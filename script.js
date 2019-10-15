$(function() {
  $('#userSignInput').on("keyup", function(e) {
    var inputLength = $(this).val().length;
    $("#tiles").text(inputLength);

    updatePrice(inputLength);
  });
  $('#userFontInput').on("click", function(e) {
    $("table").append($(this).prop(":checked"));
    var inputFont = $(this).is(":checked");
    updatePrice($("#userSignInput").val().length, inputFont);
  });
  $('#userColorInput').on("click", function(e) {
    $("table").append($(this).prop(":checked"));
    var inputColor = $(this).is(":checked");
    updatePrice($("#userColorInput").val().length, inputColor);
  });
  $('#confirmPay').on("click", function(e) {
    console.log("is my link firing");

    var previewMessage = $('#userSignInput').val();

    $('#previewScreen').append(previewMessage);

    $('#previewScreen').animate()({ right: "0px" }, 250); 
  });
});

function updatePrice(signLength, fontUpgrade, colorUpgrade) {
  var costpertile = 5;

  if (fontUpgrade || colorUpgrade) {
    costpertile = 6;
  } else {
    costpertile = 5;
  }
  
  var subTotal = signLength * costpertile;
  var shipping = 7;

  if (signLength != 0) {
    shipping = 7;
  } else {
    shipping = 0;
  }

  var grandTotal = subTotal + shipping;

  $("#subTotal").text("$" + subTotal);
  $("#shipping").text("$" + shipping);
  $("#grandTotal").text("$" + grandTotal);

  return grandTotal;
}