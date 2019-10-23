document.addEventListener('DOMContentLoaded', appStart)
let canvas
let myPs
function appStart() {
    
    const myPs = new Photoshop ('canvas')
    document
        .querySelector('#squareBtn')
        .addEventListener('touchstart',() =>{
            myPs.brushShape = new Brush('square')
            myPs.setBrush('square')
        })
    document
        .querySelector('#circleBtn')
        .addEventListener('touchstart',() =>{
            myPs.brushShape = new Brush('circle')
            myPs.setBrush('circle')
        })
}