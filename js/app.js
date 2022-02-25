const noteContainer = document.querySelector('.app')
const addNoteBtn = document.querySelector('.add-note')

getNotes().forEach((item) => {
    const noteElement = createNoteElement(item.id , item.content)
    noteContainer.insertBefore(noteElement , addNoteBtn)
})

addNoteBtn.addEventListener('click' , () => addNote())

function getNotes() {
    return JSON.parse(localStorage.getItem('notes') || '[]')
}

function saveNotes(notes) {
    localStorage.setItem('notes' , JSON.stringify(notes))
}

function createNoteElement(id , content) {
    const noteElement = document.createElement('textarea')

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

function addNote() {
    const notes = getNotes()

    const noteItems = {
        id: Math.floor(Math.random() * 100000),
        content: ''
    }

    const noteElement = createNoteElement(noteItems.id , noteItems.content)
    noteContainer.insertBefore(noteElement , addNoteBtn)

    notes.push(noteItems)
    saveNotes(notes)

}


function updateNote(id , newContent) {
    const notes = getNotes()

    const updateNote = notes.filter((item) => item.id === id)[0]

    updateNote.content = newContent

    saveNotes(notes)

}

function deleteNote(id , element) {
    const notes = getNotes().filter((item) => item.id != id)

    saveNotes(notes)
    noteContainer.removeChild(element)
}



















