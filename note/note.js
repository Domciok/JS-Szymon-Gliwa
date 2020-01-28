class Note
{
    constructor(title, description, color, pinned)
    {
        this.title = title
        this.description = description
        this.color = color
        this.pinned = pinned
        let data = new Date()
        let date =  data.toLocaleDateString()
        let time = data.toLocaleTimeString()
        this.currentdate = date +' '+ time
    }
        addToLS(note)
        {
    localStorage.setItem(localStorage, JSON.stringify(note));
        }

}