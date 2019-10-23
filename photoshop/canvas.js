class Photoshop{
    constructor(targetElementId){
        this.canvas = document.querySelector('#' + targetElementId)
        this.canvas.addEventListener('touchmove',(e)=> this.ontouchMove(e))
        this.brushShapeName = 'square'
    }

    ontouchMove(e){
        //pobierz pędzel
        this.brushShape = new Brush(this.brushShapeName)
        const brush = this.brushShape.getBrush()
        //ustal położenie
        const x = e.touches[0].clientX - this.canvas.offsetLeft
        const y = e.touches[0].clientY - this.canvas.offsetTop
        brush.style.top = y + 'px'
        brush.style.left = x + 'px'
        //namaluj
        this.canvas.appendChild(brush)
    }
    setBrush(brushShape){
        this.brushShape = brushShape
    }
}