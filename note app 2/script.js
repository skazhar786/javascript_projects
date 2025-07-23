const addBtn = document.querySelector(".addBtn");
const main = document.querySelector("#main");

function saveNote() {
    const notes = document.querySelectorAll(".notes textarea");
    const data = []

    notes.forEach((note) => {
        data.push(note.value)
    });

    if (data.length === 0) {
        localStorage.removeItem('notes')
    } else {
        localStorage.setItem('notes', JSON.stringify(data))
    }



}

addBtn.addEventListener('click', () => {
    addNotes()
})

function addNotes(text = "") {
    const notes = document.createElement('div')
    notes.classList.add('notes')

    notes.innerHTML = `<div class="nav">
                <i class="save fa-solid fa-floppy-disk"></i>
                <i class="trash fa-solid fa-trash-can"></i>
            </div>
            <textarea>${text}</textarea>`

    notes.querySelector(".save").addEventListener('click', () => {
        saveNote()
    })
    notes.querySelector(".trash").addEventListener('click', () => {
        notes.remove()
        saveNote()
    })
     
    notes.querySelector("textarea").addEventListener('focusout',()=>{
        saveNote()
    })

    main.appendChild(notes)
}

(
    function () {
        const lsnote = JSON.parse(localStorage.getItem("notes"))

        if (lsnote === null) {
            addNotes()
        } else {
            lsnote.forEach((note) => {
                addNotes(note)
            })
        }
    }
)()





































// const addBtn = document.querySelector(".addBtn");
// const main = document.querySelector("#main");

// function saveNote() {
//     const notes = document.querySelectorAll(".notes textarea")
//     //    console.log(notes);

//     const data = []
//     notes.forEach((note) => {
//         data.push(note.value)
//     });

//     if (data.length === 0) {
//         localStorage.removeItem("notes")
//     } else {
//         localStorage.setItem("notes", JSON.stringify(data))
//     }

// }

// addBtn.addEventListener("click", () => {
//     addNote();
// })

// function addNote(text = "") {
//     const note = document.createElement("div")
//     note.classList.add("notes")
//     note.innerHTML = `
//             <div class="nav">
//                 <i class="save fa-solid fa-floppy-disk"></i>
//                 <i class="trash fa-solid fa-trash-can"></i>
//             </div>
//             <textarea>${text}</textarea>`

//     note.querySelector(".trash").addEventListener("click", () => {
//         note.remove()
//         saveNote()
//     })

//     note.querySelector(".save").addEventListener("click", () => {
//         saveNote()
//     })

//     note.querySelector("textarea").addEventListener("focusout", () => {
//         saveNote()
//     })

//     main.appendChild(note)
//     saveNote()
// }

// (
//     function () {
//         const lsnotes = JSON.parse(localStorage.getItem("notes"))

//         if (lsnotes === null) {
//             addNote()

//         } else {
//             lsnotes.forEach((lsnote) => {
//                 addNote(lsnote)
//             })
//         }
//     })()


