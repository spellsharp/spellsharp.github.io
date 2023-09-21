let cartItems = {};

function addToCart(productId) {
  if (cartItems[productId]) {
    cartItems[productId]++;
  } else {
    cartItems[productId] = 1;
  }

  const buttonElement = document.getElementById(`button${productId}`);
  buttonElement.innerHTML = `
            
            <div style="display: flex; justify-content: center">
              <button
                style="font-family: Poppins; border-radius: 360px"
                onclick="decrementCartItem(${productId})"
              >
                -
              </button>
              <span id="count${productId}" style="padding: 0 10px">${cartItems[productId]}</span>
              <button
                style="font-family: Poppins; border-radius: 360px"
                onclick="incrementCartItem(${productId})"
              >
                +
              </button>
            </div>
          `;
}
function incrementCartItem(productId) {
  if (cartItems[productId] < 50) {
    cartItems[productId]++;
    updateCartItem(productId);
  } else {
    alert("Order of each item cannot exceed 50");
  }
}

function decrementCartItem(productId) {
  if (cartItems[productId] > 1) {
    cartItems[productId]--;
    updateCartItem(productId);
  } else {
    delete cartItems[productId];
    const buttonElement = document.getElementById(`button${productId}`);
    buttonElement.innerHTML = `
              <button
                style="font-family: Poppins; border-radius: 360px"
                onclick="addToCart(${productId})"
              >
                Add to Cart
              </button>
            `;
    updateCartItem(productId);
  }
}

function calculatePrice(productId) {
  const basePrice = parseFloat(
    document.getElementById(`price${productId}`).innerText.replace("$", "")
  );
  return basePrice * cartItems[productId];
}

function updateCartItem(productId) {
  const countElement = document.getElementById(`count${productId}`);
  countElement.innerText = cartItems[productId];
}

function handlePurchase() {
  let totalPrice = 0;
  for (const productId in cartItems) {
    totalPrice += calculatePrice(productId);
  }
  if (totalPrice === 0) {
    alert("Please add items to cart before proceeding to purchase");
    return;
  }
  console.log(totalPrice);
  window.location.href = `/pages/PurchasePage.html?total=${totalPrice.toFixed(
    2
  )}`;
}
