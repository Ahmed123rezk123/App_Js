// localStorage.setItem("First Name","Ahmed")
// console.log(localStorage.getItem("First Name"))
////////////////////////////////////////////////////

var userInfo=document.querySelector("#user_info")

var userData=document.querySelector("#user")

var links=document.querySelector("#links")

if(localStorage.getItem("username")){ 
    links.remove();

    userInfo.style.display="flex"

    userData.innerHTML=localStorage.getItem("username")

}
var logout=document.querySelector("#logout")
logout.addEventListener("click",function leave() {
    localStorage.clear()
    setTimeout(()=> {
        window.location="login.html"
    } , 1500)
})
 
///////////////////////////////

var allproducts=document.querySelector(".products")
var products=[
    {
        id:1,
        title:"oppo reno 7",
        color:"Black",
        parag:"New Mobile Fom India" ,
        imageUrl:"images/oppo reno 7.jpg"

    },
    {
        id:2,
        title:"BMW",
        color:"Grey",
        parag:"This car is made in London" ,
        imageUrl:"images/img1.png"

    },
    {
        id:3,
        title:"Watch",
        color:"White",
        parag:"It is Amazing" ,
        imageUrl:"images/w32.jpg"

    },
    {
        id:4,
        title:"Iphone 15",
        color:"Grey",
        parag:"This is made by Apple" ,
        imageUrl:"images/db1ffc7e-f8bf-49f5-b7b5-c2bfcf081b38.png"

    }

]

function draw (){
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
draw()



var badge=document.querySelector(".badge") 
var cartDiv=document.querySelector(".carts-products div")

var addItem=localStorage.getItem();


    if(localStorage.getItem("username"))
    {
        function addToCart(id){
            var chooseItem=products.find((item) => item.id === id);
            cartDiv.innerHTML +=`<p>${chooseItem.title}</p>`
            addItem=[...addItem , chooseItem]
            
            localStorage.setItem("productCart",JSON.stringify(addItem) )

            var cnt=document.querySelectorAll(".carts-products div p")
            
            badge.style.display="block"
            badge.innerHTML=cnt.length
            }
    }
    else {
        window.location="login.html"
    }
 

var shopIcon=document.querySelector(".shopping-cart")
var cartsProduct=document.querySelector(".carts-products")
shopIcon.addEventListener("click", open)

function open(){
    if(cartDiv.innerHTML !="") {
        if(cartsProduct.style.display=="block")
        {
            cartsProduct.style.display="none"
        }
        else {
            cartsProduct.style.display="block"
        }
    }
}

