var username=document.querySelector("#username")
var password=document.querySelector("#password")
var register=document.querySelector("#sign_in")

register.register.addEventListener("click" , function(e) {
localStorage.setItem("username",username.value)
localStorage.setItem("password",password.value)

if(username.value===""||password.value===""){
    alert("Please Enter Your Data")
}
else {

}