
var unitPrice = 1000;
var days = 30;

var quantityInput = document.getElementById("quantity");
var totalPriceBox = document.getElementById("totalPrice");
var errorMsg = document.getElementById("errorMsg");
var calculateBtn = document.getElementById("calculateBtn");

function calculateTotal() {
  var quantity = Number(quantityInput.value);

  if (quantity < 0) {
    errorMsg.style.display = "block";
    quantity = 0;
    quantityInput.value = 0;
  } else {
    errorMsg.style.display = "none";
  }

  var totalPrice = unitPrice * quantity * days;
  totalPriceBox.value = totalPrice;

  if (totalPrice > 1000) {
    alert("Congratulations! Your total is " + totalPrice + ". You are eligible for a Gift Coupon!");
  }
}

quantityInput.addEventListener("input", calculateTotal);
calculateBtn.addEventListener("click", calculateTotal);
