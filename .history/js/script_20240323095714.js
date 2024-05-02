// localStorage.setItem("First Name","Ahmed")
// console.log(localStorage.getItem("First Name"))
////////////////////////////////////////////////////

var userInfo=document.querySelector("#user_info")

var userData=document.querySelector("#user")

var links=document.querySelector("#links")

if(localStorage.getItem("username")){
    links.remove()
}