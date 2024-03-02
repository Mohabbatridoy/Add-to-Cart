let productBtn = document.querySelector('#Watch-btn');


//add eventlistner:
productBtn.addEventListener('click', AddToCart);



// Functions
function AddToCart(e){
    // console.log("function called");
    if (e.hasAtrribute('Watch-btn')){
        console.log("worked");
    }
    let product = productBtn.parentElement;
    let cartList = document.querySelector('#cart-list');
    let li = document.createElement('li');
    li.appendChild(product);
    let ol = document.createElement('ol');
    ol.appendChild(li);
    cartList.appendChild(ol);
    e.preventDefault();
}