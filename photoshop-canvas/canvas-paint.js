document.addEventListener('DOMContentLoaded', appStart)

let canvas
let ctx
var md= false

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
    document
        .querySelector('#square')
        .addEventListener('click', () => painting())
  ctx =canvas.getContext('2d')
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
function painting(){
    canvas.addEventListener('mousedown', down)
    canvas.addEventListener('mouseup', toggledraw)
    canvas.addEventListener('mousemove',
    function(evt){
        var mosuePos = getMousePos(canvas, evt)
        var posx =mosuePos.x
        var posy =mosuePos.y
        draw(canvas, posx, posy)
    })
    
    function down(){
        md = true
    }
    function toggledraw(){
        md = false
    }
    function getMousePos(canvas, evt){
        var rect = canvas.getBoundingClientRect()
        return{
            x:evt.clientX - rect.left,
            y:evt.clientY - rect.top
        }
    }
    function draw(canvas, posx, posy){
        var context = canvas.getContext('2d')
        if(md){
            context.fillRect(posx, posy, 10, 10)
        }
    }
}