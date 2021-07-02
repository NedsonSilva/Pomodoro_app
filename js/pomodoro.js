function start() {
   pomodoro = setInterval(() => {
      minute--
      timer(minute)
   }, 1000)

   if (initial) {
      circleTimer.style.animationName = 'time'
      circleTimer.style.animationDuration = `${minute}s`
      circleTimer.style.animationPlayState = 'running'
   } else
      circleTimer.style.animationPlayState = 'running'

   initial = false
}

function pause() {
   clearInterval(pomodoro)
   circleTimer.style.animationPlayState = 'paused'
}

function timeOut() {
   clearInterval(pomodoro)
   document.querySelector('.circle-time h3').innerText = 'RESTART'
   mainElement.classList.add('timeout')
   timerBeep.play()
   timeSound = setInterval(() => timerBeep.play(), 10000)
}

function timer(second) {
   const date = new Date(second * 1000).toLocaleTimeString('pt-br', {
      hour12: false,
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'GMT'
   })
   timeElement.innerText = date
   if (!second) timeOut()
}

pomodoroState.addEventListener('click', () => {
   if (pomodoroState.innerText === 'RESTART') {
      reset()
   } else if (alternateStartAndPause) {
      start()
      pomodoroState.innerText = 'PAUSE'
      alternateStartAndPause = false
   } else {
      pause()
      pomodoroState.innerText = 'START'
      alternateStartAndPause = true
   }
})