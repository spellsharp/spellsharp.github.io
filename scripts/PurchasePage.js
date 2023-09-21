function cancelPurchase() {
  window.location.href = "MerchandisePage.html";
}
function luhnCheck(num) {
  let arr = (num + "")
    .split("")
    .reverse()
    .map((x) => parseInt(x));
  let lastDigit = arr.splice(0, 1)[0];
  let sum = arr.reduce(
    (acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9),
    0
  );
  sum += lastDigit;
  return sum % 10 === 0;
}
function confirmPurchase() {
  const fname = document.getElementById("first-name").value;
  const lname = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("shipping-address").value;
  const cardno = document.getElementById("cardNumber").value;
  const cardname = document.getElementById("cardHolderName").value;
  const expirydate = document.getElementById("expiryDate").value;
  const cvv = document.getElementById("cvv").value;

  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }
  var phonePattern = /^\+?\d{10,}$/;
  if (!phonePattern.test(phone)) {
    alert("Please enter a valid phone number.");
    return;
  }
  if (
    fname.trim() === "" ||
    lname.trim() === "" ||
    email.trim() === "" ||
    phone.trim() === "" ||
    address.trim() === ""
  ) {
    alert("Please fill in all your personal details.");
  } else if (
    cardno.trim() === "" ||
    cardname.trim() === "" ||
    expirydate.trim() === "" ||
    cvv.trim() === ""
  ) {
    alert("Please fill in all your card details.");
  } else {
    luhnCheck(cardno)
      ? (window.location.href = "success.html")
      : alert("Invalid card number.");
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const totalAmount = urlParams.get("total");

  if (totalAmount) {
    document.getElementById("total-amount").value = totalAmount;
    document.getElementById("shipping-fee").value = 10;
    document.getElementById("taxes").value = totalAmount * 0.07;

    updateTotal();
  }
});

function updateTotal() {
  const totalAmount = parseFloat(document.getElementById("total-amount").value);
  const shippingFee = parseFloat(document.getElementById("shipping-fee").value);
  const taxes = parseFloat(document.getElementById("taxes").value);
  const total = totalAmount + shippingFee + taxes;

  document.getElementById("total").value = total.toFixed(2);
}
