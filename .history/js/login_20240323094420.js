var username=document.querySelector("#username")
var password=document.querySelector("#password")
var login=document.querySelector("#sign_in")

var getUsername=localStorage.getItem("username")
var getPassword=localStorage.getItem("password")

login.addEventListener("click" , function(e) {
    e.preventDefault()
if(username.value===""||password.value===""){
    alert("Please Enter Your Data")
}
else {
  if(getUsername && getUsername.trim() === username.value && getPassword && getPassword.trim() === password.value){
    setTimeout(() => {
        window.location="index.html"

    } , 10)
  }
  else {
    alert("R")
  }
}
})