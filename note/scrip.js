let TAB = []
let addNoteBTN = document.querySelector('#addNoteBTN')
let notes = document.querySelector('#notes')
let pinned = document.querySelector('#pinnedBT')
addNoteBTN.addEventListener('click', addNote)
window.onload = function(){
    if (localStorage.getItem('notatkiLS') != null) {
    getfromLS()
    createDIV()
    }
}
function addNote()
{
    let check
    if (pinned.checked == true){
    check = true
    }
    else{
        check = false
    }

    TAB.push(new Note(title.value, description.value, color.value,check))
      
    pushLS()
    createDIV()
    
}
function pushLS(){
    localStorage.setItem('notatkiLS', JSON.stringify(TAB))
    getfromLS()
}
function getfromLS(){
TAB = JSON.parse(localStorage.getItem('notatkiLS'))
}

function createDIV(){
    notes.innerHTML = ''
    TAB.forEach(element => {
        
        let container = document.createElement('div')
        let title = document.createElement('div')
        title.innerText = element.title
        let description = document.createElement('div')
        description.innerText = element.description
        let time = document.createElement('div')
        time.innerText = element.currentdate 
        container.style.backgroundColor = element.color
        container.className = 'container'
        container.appendChild(title)
        title.className = 'title'
        container.appendChild(description)
        container.appendChild(time)
        time.className = 'time'
        container.className = 'container'
        if(element.pinned == true){
            notes.prepend(container)
        }
        else{
            notes.appendChild(container)
        }
        })
}