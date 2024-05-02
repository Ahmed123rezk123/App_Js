var productCart=localStorage.getItem("productCart")

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
                <button class="btn1" onClick="RemoveFromChart(${item.id})">Remove From Chart</button>
                <i class="far fa-heart fav"></i>
              </div>
          </div>`
    })
allproducts.innerHTML=y;
}