var username=document.querySelector("#username")
var email=document.querySelector("#email")
var password=document.querySelector("#password")
var register=document.querySelector("#sign_up")

register.addEventListener("click" , function() {
    if(username.value === "" || email.value==="" || password.value=="")
    {
        alert("Please Enter Your Data")
    }
    else {
        localStorage.setItem("username",)
    }
})