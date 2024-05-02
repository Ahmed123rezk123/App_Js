// var productCart=localStorage.getItem("productCart")
var allproducts=document.querySelector(".products")
// if(productCart){
//     var item=JSON.parse(productCart)
//     drawProducts(item);
// }

function drawProducts(aproducts=[]){
  var products=JSON.parse(localStorage.getItem("productCart")) || 
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
                <button class="btn1" onClick="removeFromCart(${item.id})">Remove From Cart</button>
              </div>
          </div>`
    })
allproducts.innerHTML=y;
}


function removeFromCart(id){
if(productCart) {
  var items=JSON.parse(productCart)
  var filterItems=items.filter((item) => item.id !== id)
  drawProducts(filterItems);
  localStorage.setItem("productCart", JSON.stringify(filterItems))
}
}