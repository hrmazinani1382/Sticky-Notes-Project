const noteContainer = document.querySelector('.app')
const addNoteBtn = document.querySelector('.add-note')

function getNotes() {
    return JSON.parse(localStorage.getItem('notes') || '[]')
}

function saveNotes(notes) {
    localStorage.setItem('notes' , JSON.stringify(notes))
}

function createNoteElement(id , content) {
    const noteElement = document.createElement(textarea)

    noteElement.classList.add('note')

    noteElement.textContent = content

    noteElement.addEventListener('change' , () => {
        updateNote(id , noteElement.value)
    })

    noteElement.addEventListener('dblclick' , () => {
        deleteNote(id , noteElement)
    })

    return noteElement

}





function updateNote(id , newContent) {}

function deleteNote(id , element) {}



















