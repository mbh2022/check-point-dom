// cart
let cartIcon = document.querySelector(`#cart-icon`);
let cart = document.querySelector(`.cart`);
let closeCart = document.querySelector(`#close-cart`);

// open carte
cartIcon.onclick = () => {
  cart.classList.add("active");
};
// close carte
closeCart.onclick = () => {
  cart.classList.remove("active");
};

// cart working js

if (document.readyState == ` loading`) {
  document.addEventListener(`DOMContentLoaded`, ready);
} else {
  ready();
}

// making function
function ready() {
  var removeCartButtons = document.getElementsByClassName(`cart-remove`);
  for (var i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i];
    button.addEventListener(`click`, removeCartItem);
  }
  // quantity change
  var quantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener(`change`, quantityChanged);
  }
  // Add To cart
  var addCart = document.getElementsByClassName(`bx`);
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener(`click`, addCartClicked);
  }
}

// remove items from cart
function removeCartItem(event) {
  var buttonClick = event.target;
  buttonClick.parentElement.remove();
  Updatetotal();
}

// quantity changes

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  Updatetotal();
}
// Add to cart

function addCartClicked(event) {
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName(`product-title`)[0].innerText;
  var price = shopProducts.getElementsByClassName(`price`)[0].innerText;
  var productimg = shopProducts.getElementsByClassName(`product-img`)[0].src;
  addProductTocart(title, price, productimg);
  Updatetotal();
}
var articles = document.getElementsByClassName("cart-box");
console.log(articles);

function addProductTocart(title, price, productimg) {
  var cartShopBox = document.createElement(`div`);
  cartShopBox.classList.add(`cart-box`);
  var cartBoxContent = `
                    <img src="${productimg}" alt="" class="cart-img">
                        <div class="detail-box">
                        <div class="cart-product-title">${title}</div>
                        <DIV class="cart-price">${price}</DIV>
                        <input type="number" value="1" class="cart-quantity">
                        </div>
                    <i class='bx bxs-trash-alt cart-remove' ></i>`;

  cartShopBox.innerHTML = cartBoxContent;
  document.getElementsByClassName("cart-content")[0].append(cartShopBox);
  cartShopBox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click", removeCartItem);
  cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change", quantityChanged);
}
// Update Total

function Updatetotal() {
  var total = 0;
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("TND", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
    // if price contain some cents value
    total = Math.round(total * 100) / 100;

    document.getElementsByClassName(`total-price`)[0].innerText = total + "TND";
  }
}
