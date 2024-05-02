var username=document.querySelector("#username")
var password=document.querySelector("#password")
var register=document.querySelector("#sign_in")

localStorage.setItem("username",username.value)
localStorage.setItem("password",password.value)

if(username.value===""||password.value==="")