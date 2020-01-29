let ball = document.querySelector('#ball')
let field = document.getElementsByClassName("field")[0]
let hole = document.querySelector('#hole')

let xspeed = 0
let yspeed = 0

let x = 20
let y = 20

let xhole
let yhole

function holePos(){
   
    xhole = Math.random()*window.innerWidth-40
    hole.style.left=xhole + 'px'
    yhole = Math.random()*window.innerHeight-40
    hole.style.top=yhole + 'px'
}

function Ballspeed(e){

    xspeed = e.beta/5
    yspeed = e.gamma/5
}
function moveBall(){
    if(x+xspeed<window.innerWidth-50 && x+xspeed>0){
        x+=xspeed
        ball.style.left=x +'px'
    }
    if(y+yspeed<window.innerHeight-50 && y+yspeed>0){
        y+=yspeed
        ball.style.top=y +'px'
    }
    if(x===xhole-50 && y===yhole-50){
        console.log('s')
    }

}


window.onload = holePos()
window.addEventListener('deviceorientation', moveBall)
window.addEventListener('deviceorientation', Ballspeed)
