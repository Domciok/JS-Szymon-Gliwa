document.addEventListener('DOMContentLoaded', appStart)

let canvas
let ctx
<<<<<<< HEAD
let md = false
let tryb = "kwadrat"
=======
var md= false
var tryb = "kwadrat"
>>>>>>> a1e5788454dd7457ba8ca6656c6c9b4a3ea92479
const color = drawcolor

function appStart() {
    canvas = document.querySelector('#canvas')
    document
        .querySelector('#darken')
        .addEventListener('click', () => ligtenFilter(-30))
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
<<<<<<< HEAD
        .addEventListener('click', () => {
=======
        .addEventListener('click', () =>{ 
>>>>>>> a1e5788454dd7457ba8ca6656c6c9b4a3ea92479
            painting()
            paintingSquare()
        })
    document
        .querySelector('#circle')
<<<<<<< HEAD
        .addEventListener('click', () => {
            paintingCircle()
            painting()
        })
    document
        .querySelector('#green')
        .addEventListener('click', () => {
=======
        .addEventListener('click', () =>{
            paintingCircle()
            painting()
        } )
    document
        .querySelector('#green')
        .addEventListener('click', () =>{
>>>>>>> a1e5788454dd7457ba8ca6656c6c9b4a3ea92479
            green()
        })
    document
        .querySelector('#black')
<<<<<<< HEAD
        .addEventListener('click', () => {
            black()
        })
    document
        .querySelector('#red')
        .addEventListener('click', () => {
            red()
        })
    document
        .querySelector('#yellow')
        .addEventListener('click', () => {
            yellow()
        })
    ctx = canvas.getContext('2d')
=======
        .addEventListener('click', () =>{
            black()
        })
        document
        .querySelector('#red')
        .addEventListener('click', () =>{
            red()
        })
        document
        .querySelector('#yellow')
        .addEventListener('click', () =>{
            yellow()
        })
  ctx =canvas.getContext('2d')
>>>>>>> a1e5788454dd7457ba8ca6656c6c9b4a3ea92479
    drawImage()
}
function drawImage() {
    const image = new Image()
    image.src = "1.jpg"
    image.addEventListener('load', () => {
        ctx.drawImage(image, 0, 0)
    })
}
function darkenFilter(amount = 30) {
    const canvasData = ctx.getImageData(0, 0, 200, 300)
    for (let i = 0; i < canvasData.data.length; i += 4) {
        canvasData.data[i] -= amount
        canvasData.data[i + 1] -= amount
        canvasData.data[i + 2] -= amount
        //canvasData.data[i+3] -= amount
    }
    ctx.putImageData(canvasData, 0, 0)
}
function ligtenFilter(amount = 30) {
    const canvasData = ctx.getImageData(0, 0, 200, 300)
    for (let i = 0; i < canvasData.data.length; i += 4) {
        canvasData.data[i] += amount
        canvasData.data[i + 1] += amount
        canvasData.data[i + 2] += amount
        //canvasData.data[i+3] -= amount
    }
    ctx.putImageData(canvasData, 0, 0)
}
<<<<<<< HEAD
function Invert() {
    const canvasData = ctx.getImageData(0, 0, 200, 300)
    for (let i = 0; i < canvasData.data.length; i += 4) {
=======
function Invert(){
    const canvasData = ctx.getImageData(0,0,200,300)
    for (let i = 0; i < canvasData.data.length; i+=4){
>>>>>>> a1e5788454dd7457ba8ca6656c6c9b4a3ea92479
        canvasData.data[i] = 255 - canvasData.data[i]
        canvasData.data[i + 1] = 255 - canvasData.data[i + 1]
        canvasData.data[i + 2] = 255 - canvasData.data[i + 2]
    }
<<<<<<< HEAD
    ctx.putImageData(canvasData, 0, 0)
}
function GreyScale() {
    const canvasData = ctx.getImageData(0, 0, 200, 300)
    for (let i = 0; i < canvasData.data.length; i += 4) {
        let avg = (canvasData.data[i] + canvasData.data[i + 1] + canvasData.data[i + 2]) / 3
=======
    ctx.putImageData(canvasData, 0, 0)}
function GreyScale(){
    const canvasData = ctx.getImageData(0,0,200,300)
    for (let i=0; i < canvasData.data.length; i+=4){
        let avg = (canvasData.data[i] + canvasData.data[i + 1] + canvasData.data[i + 2]) /3
>>>>>>> a1e5788454dd7457ba8ca6656c6c9b4a3ea92479
        canvasData.data[i] = avg
        canvasData.data[i + 1] = avg
        canvasData.data[i + 2] = avg
    }
    ctx.putImageData(canvasData, 0, 0)
}
<<<<<<< HEAD
function painting() {
    canvas.addEventListener('mousedown', down)
    canvas.addEventListener('mouseup', toggledraw)
    canvas.addEventListener('mousemove',
        function (evt) {
            let mosuePos = getMousePos(canvas, evt)
            let posx = mosuePos.x
            let posy = mosuePos.y
            let tryb = "circle"
            draw(canvas, posx, posy, tryb)
        })

    function down() {
        md = true
    }
    function toggledraw() {
        md = false
    }
    function getMousePos(canvas, evt) {
        let rect = canvas.getBoundingClientRect()
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        }
    }
    function draw(canvas, posx, posy) {
        var context = canvas.getContext('2d')

        if (md) {
            if (tryb == "square") {
                context.fillRect(posx, posy, 10, 10)
                context.fillStyle = drawcolor
            }
            else if (tryb == "circle") {
                context.beginPath()
                context.arc(posx, posy, 10, 0, 2 * Math.PI)
                context.fill()
                context.fillStyle = drawcolor
            }
        }
    }
}
function paintingCircle() {
    tryb = "circle"
}
function paintingSquare() {
    tryb = "square"
}
function green() {
    drawcolor = 'green'
}
function black() {
    drawcolor = 'black'
}
function red() {
    drawcolor = 'red'
}
function yellow() {
=======
function painting(){
    canvas.addEventListener('mousedown', down)
    canvas.addEventListener('mouseup', toggledraw)
    canvas.addEventListener('mousemove',
    function(evt){
        var mosuePos = getMousePos(canvas, evt)
        var posx =mosuePos.x
        var posy =mosuePos.y
        var tryb = "circle"
        draw(canvas, posx, posy, tryb)
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
            if (tryb == "square"){
                context.fillRect(posx, posy, 10, 10)
                context.fillStyle = drawcolor
            }
            else if (tryb == "circle"){
            context.beginPath()
            context.arc(posx, posy, 10, 0, 2 * Math.PI)
            context.fill()
            context.fillStyle = drawcolor
        }
        }
    }
}
function paintingCircle()
{
tryb = "circle"
}
function paintingSquare()
{
tryb = "square"
}
function green(){
    drawcolor = 'green'
}
function black(){
    drawcolor = 'black'
}
function red(){
    drawcolor = 'red'
}
function yellow(){
>>>>>>> a1e5788454dd7457ba8ca6656c6c9b4a3ea92479
    drawcolor = 'yellow'
}