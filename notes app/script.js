const noteBOX = document.querySelector('.container')
const button = document.querySelector('.btn')
let notes = document.querySelector('.input-container')

function showNotes(){
    notes.innerHTML = localStorage.getItem("notes")
}
showNotes()

function updateStorage(){
    localStorage.setItem('notes',notes.innerHTML)
}

button.addEventListener('click',function(){
  let inputBox = document.createElement('p')
  let img = document.createElement('img')
  inputBox.classList = 'inputBox'
  inputBox.setAttribute('contenteditable','true')
  img.src = 'images/delete.png'
  notes.appendChild(inputBox).appendChild(img)
})

notes.addEventListener("click",function(e){
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove()
        updateStorage()
    }else if( e.target.tagName === 'P'){
        let note = document.querySelectorAll('.inputBox')
           note.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage()
            }
        })
    }

    document.addEventListener('keydown', event =>{
          if(event.key ==='Enter'){
            document.execCommand('insertLineBreak')
            event.preventDefault()
          }
    })
})
