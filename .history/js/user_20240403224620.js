let userInfo=document.getElementById("user_info")


let userData=document.querySelector("#user")

let links=document.querySelector("#links")

if(localStorage.getItem("username")){ 
    links.remove();

    userInfo.style.="flex";

    userData.innerHTML=localStorage.getItem("username");

}
let logout=document.querySelector("#logout")
logout.addEventListener("click",function () {
    localStorage.clear()
    setTimeout(()=> {
        window.location="login.html"
    } , 1500)
})
 