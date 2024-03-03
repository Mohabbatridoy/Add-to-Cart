let productBtn = document.querySelector('#product-list');
let cartList = document.querySelector('#cart-list');



//add eventlistner:
productBtn.addEventListener('click', AddToCart);
cartList.addEventListener('click', removeProductFromCart);


// Functions
function AddToCart(e){
    if(e.target.hasAttribute("href")){
        // console.log("watch btn clicked")
        let product = e.target.parentElement;
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        li.textContent = product.querySelector('p').textContent + ' ' + product.querySelector('p:nth-child(2)').textContent;


        let link = document.createElement('a');
        link.setAttribute('href','#');
        link.innerHTML = '      X';
        // console.log(link)

        li.appendChild(link);
        ul.appendChild(li);

        let cartList = document.querySelector('#cart-list');
        cartList.appendChild(ul);

    }   
    e.preventDefault();
}


function removeProductFromCart(e){
    if(e.target.hasAttribute("href")){
        if(confirm("Are you sure?")) {
            e.target.parentElement.remove();
        }
    }

    e.preventDefault();
}