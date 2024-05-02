var username=document.querySelector("#username")
var password=document.querySelector("#password")
var login=document.querySelector("#sign_in")

var getUser=localStorage.getItem("username")
var getPassword=localStorage.getItem("password")

register.addEventListener("click" , function(e) {
    e.preventDefault()
if(username.value===""||password.value===""){
    alert("Please Enter Your Data")
}
else {
    localStorage.setItem("username",username.value)
    localStorage.setItem("password",password.value)
}
})