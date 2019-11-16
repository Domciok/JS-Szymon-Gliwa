document.addEventListener('DOMContentLoaded', appStart)

let canvas
let ctx

function appStart() {
   canvas= document.querySelector('#canvas')
   document
        .querySelector('#darken')
        .addEventListener('click',() => darkenFilter())
    document
        .querySelector('#ligten')
        .addEventListener('click', () => ligtenFilter())
    document
        .querySelector('#invert')
        .addEventListener('click', () => Invert())
    document
        .querySelector('#greyscale')
        .addEventListener('click', () => GreyScale())
  ctx =canvas.getContext('2d')
    /*ctx.rect(50,50,300,200)
    ctx.fill()
    ctx.arc(500,500,50,0,2*Math.PI)
    ctx.stroke()
    //ctx.stroke() obrys*/
    drawImage()
}
function drawImage(){
    const image = new Image()
    image.src = "1.jpg"
    image.addEventListener('load', () =>{
        ctx.drawImage(image, 0, 0)
    })
}
function darkenFilter(amount = 30) {
    const canvasData = ctx.getImageData(0, 0, 200, 300)
    for (let i = 0; i < canvasData.data.length; i+=4){
        canvasData.data[i] -= amount
        canvasData.data[i+1] -= amount
        canvasData.data[i+2] -= amount
        //canvasData.data[i+3] -= amount
    }
    ctx.putImageData(canvasData, 0, 0)
}
function ligtenFilter(amount = 30) {
    const canvasData = ctx.getImageData(0, 0, 200, 300)
    for (let i = 0; i < canvasData.data.length; i+=4){
        canvasData.data[i] += amount
        canvasData.data[i+1] += amount
        canvasData.data[i+2] += amount
        //canvasData.data[i+3] -= amount
    }
    ctx.putImageData(canvasData, 0, 0)
}
function Invert(){
    const canvasData = ctx.getImageData(0,0,200,300)
    for (let i = 0; i < canvasData.data.length; i+=4){
        canvasData.data[i] = 255 - canvasData.data[i]
        canvasData.data[i + 1] = 255 - canvasData.data[i + 1]
        canvasData.data[i + 2] = 255 - canvasData.data[i + 2]
    }
    ctx.putImageData(canvasData, 0, 0)}
function GreyScale(){
    const canvasData = ctx.getImageData(0,0,200,300)
    for (let i=0; i < canvasData.data.length; i+=4){
        let avg = (canvasData.data[i] + canvasData.data[i + 1] + canvasData.data[i + 2]) /3
        canvasData.data[i] = avg
        canvasData.data[i + 1] = avg
        canvasData.data[i + 2] = avg
    }
    ctx.putImageData(canvasData, 0, 0)
}