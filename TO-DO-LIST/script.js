const inputBox = document.getElementById('inptu-box')
const taskList = document.getElementById('task-list')

function addTask(){
    if(inputBox.value === ''){
        alert('please enter something')
    }else {
     let li = document.createElement('li')
        li.innerHTML = inputBox.value;
        taskList.appendChild(li)
        let span = document.createElement('span');
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    inputBox.value = ''
    savaeData()
}

taskList.addEventListener('click',function(e){
    if(e.target.tagName ==="LI"){
        
        e.target.classList.toggle('checked')
        savaeData()
    }else if(e.target.tagName ==="SPAN"){
          e.target.parentElement.remove()
          savaeData()
    }
})

function savaeData(){
    localStorage.setItem('task',taskList.innerHTML)
}

function displayData(){
    taskList.innerHTML = localStorage.getItem('task')
}
displayData()
