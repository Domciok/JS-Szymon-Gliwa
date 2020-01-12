document.body.addEventListener('keypress', playSounds)

document.querySelector('#channel1R')
    .addEventListener('click', RecChann1)

document.querySelector('#channel2R')
    .addEventListener('click', RecChann2)

document.querySelector('#channel3R')
    .addEventListener('click', RecChann3)

document.querySelector('#channel4R')
    .addEventListener('click', RecChann4)

document.querySelector('#channel1P')
    .addEventListener('click', PlayChann1)

document.querySelector('#channel2P')
    .addEventListener('click', PlayChann2)

document.querySelector('#channel3P')
    .addEventListener('click', PlayChann3)

document.querySelector('#channel4P')
    .addEventListener('click', PlayChann4)

let channel1Rec
let channel2Rec
let channel3Rec
let channel4Rec

const channel1tab = []
const channel2tab = []
const channel3tab = []
const channel4tab = []

let onchann1 = -1

const sounds = {
    KeyQ: "#boom",
    KeyW: "#clap",
    KeyE: "#hihat",
    KeyR: "#kick",
    KeyA: "#openhat",
    KeyS: "#ride",
    KeyD: "#snare",
    KeyF: "#tink",
    KeyG: "#tom",
}

function StopPlay(){
    onchann1 = -1
}

function RecChann1(){
    channel1Rec = Date.now()
    onchann1 = 0
}

function RecChann2(){
    channel2Rec = Date.now()
    onchann1 = 1
}

function RecChann3(){
    channel3Rec = Date.now()
    onchann1 = 2
}

function RecChann4(){
    channel4Rec = Date.now()
    onchann1 = 3
}

function PlayChann1() {
 StopPlay()
channel1tab.forEach((el) => {
    setTimeout(() => {
        playSound(sounds[el.sound])
    }, el.time)
})
}

function PlayChann2() {
    StopPlay()
   channel2tab.forEach((el) => {
       setTimeout(() => {
           playSound(sounds[el.sound])
       }, el.time)
   })
   }

   function PlayChann3() {
    StopPlay()
   channel3tab.forEach((el) => {
       setTimeout(() => {
           playSound(sounds[el.sound])
       }, el.time)
   })
   }

   function PlayChann4() {
    StopPlay()
   channel4tab.forEach((el) => {
       setTimeout(() => {
        playSound(sounds[el.sound])
       }, el.time)
   })
   }


function playSounds(e){
    playSound(sounds[e.code])
    if (onchann1 === -1) {
        return
    }
    if (onchann1 === 0){
        const time = Date.now() - channel1Rec
        const sound = {
            sound: e.code,
            time: time
        }
        channel1tab.push(sound)
    }
    if (onchann1 === 1){
        const time = Date.now() - channel2Rec
        const sound = {
            sound: e.code,
            time: time
        }
        channel2tab.push(sound)
    }
    if (onchann1 === 2){
        const time = Date.now() - channel3Rec
        const sound = {
            sound: e.code,
            time: time
        }
        channel3tab.push(sound)
    }
    if (onchann1 === 3){
        const time = Date.now() - channel4Rec
        const sound = {
            sound: e.code,
            time: time
        }
        channel4tab.push(sound)
    }
}
function playSound(id) {
    const audioTag = document.querySelector(id)
    audioTag.currentTime = 0
    audioTag.play()
}