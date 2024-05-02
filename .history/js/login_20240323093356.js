var username=document.querySelector("#username")
var password=document.querySelector("#password")
var register=document.querySelector("#sign_in")

var getUser=lo

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