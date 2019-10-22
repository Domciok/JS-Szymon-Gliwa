let channel1StartTime = 0

document
    .querySelector('#channel1R')
    .addEventListener('click', recChannel1)
document
    .querySelector('#channel1P')
    .addEventListener('click', playChannel1)
function recChannel1(){
    channel1StartTime = Date.now()
}
function playChannel1() {
    channel1.forEach(el => {
        setTimeout(playSound, el.time, el.code)
    })
}
const channel1 = []
document.body.addEventListener('keydown', playSound) 
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    const time = Date.now() - channel1StartTime
    channel1.push({
        code: e.keyCode,
        time: time
    })
    audio.currentTime = 0;
    audio.play();
}
