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
        id:1,
        title:"oppo reno 7",
        color:"Black",
        imageUrl:"images/w32.jpg"

    },
    {
        id:1,
        title:"oppo reno 7",
        color:"Black",
        imageUrl:"images/oppo reno 7.jpg"

    },

]