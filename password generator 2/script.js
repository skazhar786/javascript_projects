const container = document.querySelector(".container")
const display = document.querySelector(".display")
const passwordContainer = document.querySelector("#password")
const button = document.querySelector("#button")

    let length = 8

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowerCase = "abcdefghijklmnopqrstuvwxyz"
    const number =' 1234567890'
    const symbols = "!@#$%^&*()"

 let allChar = upperCase +lowerCase + number + symbols


function createPassword(){
  let password = ""

  password += upperCase[Math.floor(Math.random()* upperCase.length)]
  password += lowerCase[Math.floor(Math.random()* lowerCase.length)]
  password += number[Math.floor(Math.random()* number.length)]
  password += symbols[Math.floor(Math.random()* symbols.length)]
  
  while(length > password.length){
  password += allChar[Math.floor(Math.random()* allChar.length)]
  }
  
  passwordContainer.value = password

}

button.addEventListener('click',() =>{
    createPassword()
})