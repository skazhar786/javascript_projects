const titleName = document.querySelector("#title")
const nameField = document.querySelector("#namefield")
const signUpBtn = document.querySelector("#signupBtn")
const signInBtn = document.querySelector("#signinBtn")

signInBtn.addEventListener('click',() =>{
    nameField.style.maxHeight = "0"
    titleName.innerHTML = "Sign In"
    signUpBtn.classList.add("disable")
    signInBtn.classList.remove("disable")
})
signUpBtn.addEventListener('click',() =>{
    nameField.style.maxHeight = "65px"
    titleName.innerHTML = "Sign Up"
    signUpBtn.classList.remove("disable")
    signInBtn.classList.add("disable")
})