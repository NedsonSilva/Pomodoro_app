const form = document.querySelector('#settings form')
const timeElement = document.querySelector('.time')
const pomodoroState = document.querySelector('.circle-time h3')
const circleTimer = document.getElementById('circleTimer')
const getStartMinutes = document.getElementById('pomodoro')
const timerBeep = document.querySelector('audio')

timeElement.innerText = `${getStartMinutes.value < 10 ? '0' + getStartMinutes.value : getStartMinutes.value}:00`

const toggleConf = () => document.getElementById('settings').classList.toggle('open-settings')

document.querySelector('#config img').addEventListener('click', toggleConf)
document.querySelector('.close img').addEventListener('click', toggleConf)

function reset() {
   timeElement.innerText = `${getStartMinutes.value < 10 ? '0' + getStartMinutes.value: getStartMinutes.value }:00`
   pomodoroState.innerText = 'START'
   minutes = getStartMinutes.value
   seconds = 0
   initial = true
   circleTimer.style.animationName = ''
   circleTimer.style.animationDuration = ''
   circleTimer.style.animationPlayState = ''
   alternateStartAndPause = true
   clearInterval(pomodoro)
}

function applyConf(event) {
   event.preventDefault()
   toggleConf()
   reset()

   if(colorSelected === 1) 
      body.classList.remove('color2', 'color3')
   if(colorSelected === 2) 
      body.classList.contains('color3') ? body.classList.replace('color3', 'color2') : body.classList.add('color2')
   if(colorSelected === 3) 
      body.classList.add('color3') 

   switch(fontSelected) {
      case 1: 
         body.classList.remove('font2', 'font3')
         break
      case 2: 
         body.classList.contains('font3') ? body.classList.replace('font3', 'font2') : body.classList.add('font2')
         break
      default: 
         body.classList.add('font3')
   }
}

form.addEventListener('submit', applyConf)

