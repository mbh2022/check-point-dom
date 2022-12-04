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

if (document.readyState == ` loading`){
    document.addEventListener(`DOMContentLoaded`, ready)
}else{
    ready();
}

// making function  
function ready (){
    var removeCartButtons = document.getElementsByClassName(`cart-remove`);
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener(`click`,removeCartItem);
    }
// quantity change  
var quantityInputs = document.getElementsByClassName(cart-quantity);
for (var i = 0; i < uantityInputs.length; i++){
    var  input = quantityInputs[i];
    input.addEventListener(`change`quantityChanged);
}
// Add To cart  
var addCart = document.getElementsByClassName(`bx`);
for (var i = 0; i < addCart.length; i++){
    var button = addCart[i];
    button.addEventListener(`click`, addCartClicked);
}
}



// remove items from cart 
function removeCartItem(event){
    var buttonClick = event.target;
    buttonClick.parentElement.remove();
    Updatetotal();
}

// quantity changes  

function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    Updatetotal();
}
// Add to cart 

function addCartClicked(event){
    var button = evenet.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName(`product-title`)[0].innerText;
    var price = shopProducts.getElementsByClassName(`price`)[0].innerText;
    var productimg = shopProducts.getElementsByClassName(`product-img`)[0].src;
    addProductTocart(title,price,productimg);
    Updatetotal();
}
function addProductTocart(title,price,productimg){
    var cartBoxes = document.createElement(`div`);
    // cartShopBox.classList.add(`cart-box`)  
    var cartItems = document.getElementsByClassName(`cart-content`);
    var cartItemsNames = cartItems.getElementsByClassName(`cart-product-title`);
    for (var i = 0; i < cartItemsNames.length; i++){
        alert("You have already add this item to car"`);

    }

}
// Update Total  

function Updatetotal(){
    var cartContent = document.getElementsByClassName(`cart-content`)[0];
    var cartBoxes = cartContent.getElementsByClassName(`cart-box`);
    for (var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName(`cart-price`)[0];
        var quantityElement = cartBox.getElementsByClassName(`cart-quantity`)[0];
        var price = parseFloat(priceElement.innerText.replace("TND",""));
        var quantity = quantityElement.value;
        total = tatal + (price * quantity);
        // if price contain some cents value  
        total = Math.round(total * 100) / 100;

        document.getElementsByClassName(`total-price`)[0].innerText = "TND" + total;

    }
}