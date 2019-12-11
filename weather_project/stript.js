<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', appStart)

const opwApiKey = '50d53005c0fd5f556bb4ef15224c4209'
const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=Wadowice&APPID=${opwApiKey}`
const weather = fetch(openWeatherUrl)
function appStart(){
let value = document.querySelector('#value')
let button = document.querySelector('#pogoda')
button.addEventListener('click', a)
}
function a(){
    weather
    .then((respObject)=>{console.log('First .then',respObject); return respObject.json()})
    .then((pogoda=>{
        value.innerHTML= 'Aktualna temperatura ' //+ pogoda.main.temp-273
        value.innerHTML+= pogoda.main.temp-273
    }))

}

=======
document.addEventListener('DOMContentLoaded', appStart)

const opwApiKey = '50d53005c0fd5f556bb4ef15224c4209'
const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=Wadowice&APPID=${opwApiKey}`
const weather = fetch(openWeatherUrl)
function appStart(){
let value = document.querySelector('#value')
let button = document.querySelector('#pogoda')
button.addEventListener('click', a)
}
function a(){
    weather
    .then((respObject)=>{console.log('First .then',respObject); return respObject.json()})
    .then((pogoda=>{
        value.innerHTML= 'Aktualna temperatura ' //+ pogoda.main.temp-273
        value.innerHTML+= pogoda.main.temp-273
    }))

}

>>>>>>> a1e5788454dd7457ba8ca6656c6c9b4a3ea92479
