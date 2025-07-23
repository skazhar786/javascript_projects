const passwordBox = document.getElementById('password')
const buttonBox = document.getElementById('button')
const copyImg = document.getElementById('copyimg')
const length = 8

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const number = '0123456789'
const symbol = '@#'

const allChar = upperCase + lowerCase + number + symbol

function createPassword(){
    password = ''
    password += upperCase[ Math.floor(Math.random()*upperCase.length)]
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)] 
    password += number[Math.floor(Math.random()*number.length)] 
    password += symbol[ Math.floor(Math.random()*symbol.length)]

    while(length > password.length){
        password += allChar[ Math.floor(Math.random()*allChar.length)]
    }
    passwordBox.value = password

}

buttonBox.addEventListener('click',function(){
    createPassword()
})

copyImg.addEventListener('click',function(){
    passwordBox.select()
    document.execCommand('copy')
    console.log('hi');
    
})




