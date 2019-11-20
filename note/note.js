let notesArr = []

class Note{
    constructor(title = '', description = ''){
        this.title = title
        this.description = description
        this.color = 'orange'
        this.created = Date().toDataString()
        this.pinned = false
    }
}

localStorage.setItem('notes', JSON.stringify(notesArr))

notesArr = JSON.parse(loc)