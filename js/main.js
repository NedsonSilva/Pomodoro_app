const body = document.body
const form = document.querySelector('#settings form')
const timeElement = document.querySelector('.time')
const pomodoroState = document.querySelector('.circle-time h3')
const circleTimer = document.getElementById('circleTimer')
const getStartMinutes = document.getElementById('pomodoro')
const timerBeep = document.querySelector('audio')

//pomodoro breaks
const short_break = document.getElementById('short_break')
const long_break = document.getElementById('long_break')
const pomodoroButtons = document.querySelectorAll('.menu button')

//pomodoro timer
const mainElement = pomodoroState.parentNode.parentNode
let minutes = getStartMinutes.value
let seconds = 0
let pomodoro = 0
let initial = true
let alternateStartAndPause = true

timeElement.innerText = `${getStartMinutes.value < 10 ? '0' + getStartMinutes.value : getStartMinutes.value}:00`

function toggleConf() {
   document.getElementById('settings').classList.toggle('open-settings')
}

const lastConfig = { 
   start: 0, 
   short: 0, 
   long: 0,
   lastFontSelect: 0,
   lastColorSelect: 0,

   lastFont() {
      altFont.forEach((font, index) => {
        if(font.classList.contains('selected')) this.lastFontSelect = index
      })
   },

   lastColor() {
      altColor.forEach((color, index) => {
         if(color.querySelector('img')) this.lastColorSelect = index
      })
   }
}

document.querySelector('#config img').addEventListener('click', () => {
   lastConfig.start = getStartMinutes.value
   lastConfig.short = short_break.value
   lastConfig.long = long_break.value
   lastConfig.lastFont()
   lastConfig.lastColor()
   toggleConf()
})

document.querySelector('.close img').addEventListener('click', () => {
   getStartMinutes.value = lastConfig.start
   short_break.value = lastConfig.short
   long_break.value = lastConfig.long

   altFont.forEach((font, index) => {
      if(index == lastConfig.lastFontSelect) 
         font.classList.add('selected')
      else 
         font.classList.remove('selected')
   })

   altColor.forEach((font, index) => {
      if(index === lastConfig.lastColorSelect) 
         font.innerHTML = '<img src="assets/icons/selected-icon.png" alt="">'
      else
         font.innerHTML = ''
   })

   toggleConf()
})

function reset() {
   pomodoroState.innerText = 'START'
   seconds = 0
   initial = true
   circleTimer.style.animationName = ''
   circleTimer.style.animationDuration = ''
   circleTimer.style.animationPlayState = ''
   alternateStartAndPause = true
   clearInterval(pomodoro)
}

function formatClock(clock) {
   timeElement.innerText = `${clock < 10 ? '0' + clock: clock}:00`
}

function applyConf(event) {
   event.preventDefault()

   if(colorSelected === 1) 
      body.classList.remove('color2', 'color3')
   if(colorSelected === 2) {
      body.classList.remove('color3')
      body.classList.add('color2')
   }
   
   if(colorSelected === 3){
      body.classList.remove('color2')
      body.classList.add('color3') 
   }

   if(fontSelected === 1) 
      body.classList.remove('font2', 'font3')
   if(fontSelected === 2) {
      body.classList.remove('font3')
      body.classList.add('font2')
   }      
   if(fontSelected === 3) {
      body.classList.remove('font2')
      body.classList.add('font3')
   }
   
   pomodoroButtons.forEach((btn, index) => {
      if(!btn.classList.contains('inative')){
         if(index === 0) {
            pomodoroTimer()
            formatClock(getStartMinutes.value)
         }
         if(index === 1) {
            shortBreak()
            formatClock(short_break.value)
         }
         if(index === 2) {
            longBreak()  
            formatClock(long_break.value)
         }
      }
   })

   reset()
   toggleConf()
}

form.addEventListener('submit', applyConf)