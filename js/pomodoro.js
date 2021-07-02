function start() {
   pomodoro = setInterval(() => {
      if(seconds == 0) {
         seconds = 59
         minutes--
      } else
         seconds--

      timer()
   }, 1000)

   if(initial) {
      circleTimer.style.animationName = 'time'
      circleTimer.style.animationDuration = `${minutes > 0 ? minutes * 60 : 60}s`
      circleTimer.style.animationPlayState = 'running'
   } else 
      circleTimer.style.animationPlayState = 'running'

   initial = false
}

function pause() {
   clearInterval(pomodoro)
   circleTimer.style.animationPlayState = 'paused'
}

function timeOut()  {
   clearInterval(pomodoro)
   document.querySelector('.circle-time h3').innerText = 'RESTART'
   mainElement.classList.add('timeout')
   timerBeep.play()
   pomodoro = setInterval(() => { timerBeep.play() }, 10000)
}

function timer() {
   const format = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds: seconds}`
   timeElement.innerText = format
   if(minutes == 0 && seconds == 0) timeOut()
}

pomodoroState.addEventListener('click', () => {
   if(pomodoroState.innerText === 'RESTART') {
      reset()
      timerBeep.pause()
      mainElement.classList.remove('timeout')
      clearInterval(pomodoro)
   }else if(alternateStartAndPause) {
      start()
      pomodoroState.innerText = 'PAUSE'
      alternateStartAndPause = false
   } else {
      pause()
      pomodoroState.innerText = 'START'
      alternateStartAndPause = true
   }
})
