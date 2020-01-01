document.addEventListener('DOMContentLoaded', appStart)
function appStart(){
    let title = document.querySelector('#title')
    let description = document.querySelector('#description')
    let addNoteBTN = document.querySelector('#addNoteBTN')
    let colorset =document.querySelector('#colorset')
    addNoteBTN.addEventListener('click', addNote)
}
function addNote()
{
    let note = new Note(title.value, description.value, colorset.value);
    note.addToLS(note);
    let noteData = note.printNote();
}