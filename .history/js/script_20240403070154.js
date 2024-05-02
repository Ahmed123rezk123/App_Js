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

///////////////////////////////

var allproducts=document.querySelector(".products")
var products=[
    {
        id:1,
        title:"oppo reno 7",
        color:"Black",
        imageUrl:"images/oppo reno 7.jpg"

    },
    {
        id:2,
        title:"MBW",
        color:"Gray",
        imageUrl:"images/img1.png"

    },
    {
        id:3,
        title:"Watch",
        color:"White",
        imageUrl:"images/w32.jpg"

    },
    {
        id:4,
        title:"Iphone 15",
        color:"Gray",
        imageUrl:"images/db1ffc7e-f8bf-49f5-b7b5-c2bfcf081b38.png"

    },

]

function draw(){
    var y=products.map((item))
}