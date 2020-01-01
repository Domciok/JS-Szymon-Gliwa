class Note
{
    constructor(title, description, color)
    {
        this.title = title
        this.description = description
        this.color = color;
        this.date = new Date().toDateString();
        this.pinned = false;
    }
addToLS(note)
        {
    localStorage.setItem("notes", JSON.stringify(note));
        }
printNote()
        {
        let notesArr = [];
        notesArr = JSON.parse(localStorage.getItem("notes"));
        return notesArr;
        }
}