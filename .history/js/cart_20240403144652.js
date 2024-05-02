var products=localStorage.getItem("productCart")

if(products){
    draw()
}

function draw(){
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
                <button class="btn1" onClick="addToCart(${item.id})">Add To Chart</button>
                <i class="far fa-heart fav"></i>
              </div>
          </div>`
    })
allproducts.innerHTML=y;
}