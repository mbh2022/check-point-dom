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
    var removeCartButtons = document.getElementsByClassName(`cart-remove`)
    console.log(removeCartButtons)
    for (var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i]
        button.addEventListener(`click`removeCartButtons)
    }

}