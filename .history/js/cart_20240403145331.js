var productCart=localStorage.getItem("productCart")
var allproducts=document.querySelector(".products")
if(productCart){
    drawProducts()
}

function drawProducts(){
    var y=products.map((item) => {
        return `
        <div class="product-1">
            <img class="product-1-img" src="${item.imageUrl}" alt="" />
            <div class="text">
              <h2>${item.title}</h2>
              <p>${item.parag}</p>
              <span>${item.color}</span>
            </div>
              <div class="product-action">
                <button class="btn1" onClick="removeFromCart(${item.id})">Remove From Chart</button>
              </div>
          </div>`
    })
allproducts.innerHTML=y;
}