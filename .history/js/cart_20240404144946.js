
  var allproducts=document.querySelector(".products")

  var noProducts=document.querySelector("noProducts")

function drawProducts(Alproducts=[]){

  if(JSON.parse(localStorage.getItem("productCart")).len)
  var products=JSON.parse(localStorage.getItem("productCart")) || Alproducts; 
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
drawProducts()

function removeFromCart(id){
if(localStorage.getItem("productCart")) {
  var items=JSON.parse(localStorage.getItem("productCart"))
  var filterItems=items.filter((item) => item.id !== id)
  localStorage.setItem("productCart", JSON.stringify(filterItems))
  drawProducts(filterItems);
}
}