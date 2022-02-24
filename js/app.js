const noteContainer = document.querySelector('.app')
const addNoteBtn = document.querySelector('.add-note')


function getNotes() {
    return JSON.parse(localStorage.getItem('notes') || '[]')
}

function saveNotes(notes) {
    localStorage.setItem('notes' , JSON.stringify(notes))
}





