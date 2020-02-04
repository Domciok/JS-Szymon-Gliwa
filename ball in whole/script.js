<<<<<<< HEAD

let ball = document.querySelector("#ball");
let hole = document.querySelector("#hole");

let posX = 50;
let posY = 50;

var time = 0
let speedX;
let speedY;
window.onload = function() {
    secs = 0;
        var id = setInterval(function(){ 
            secs++; console.log(secs);
          if(time === 1){
            clearInterval(id);
           }
        }, 1000);
    };
function speed(e) {
    speedX=e.gamma/1000
    speedY=e.beta/1000
}
function movability() {
    if(posX + speedX < window.innerWidth-25 && posX + speedX > 0) {
        posX+=speedX;
        ball.style.left=posX+'px';        
    }

    if(posY + speedY < window.innerHeight-50 && posY + speedY > 0){
        posY+=speedY;
        ball.style.top=posY+'px';
    }

    if(posY>hole.offsetTop-30 && posY<hole.offsetTop+20){
        if(posX>hole.offsetLeft-40 && posX<hole.offsetLeft+10){
            posX = 0
            posY = 0
            speedY = 0
            speedX = 0
            alert('You win! Your time: ' +secs+'s')
            time = 1
        }
     }
        window.requestAnimationFrame(movability)

}
window.addEventListener('deviceorientation', movability)
window.addEventListener('deviceorientation', speed)
=======
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
>>>>>>> f74724be46d5160008e9a53e55e38463260c3845
