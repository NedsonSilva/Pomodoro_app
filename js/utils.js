function formatTimer(time) {
   timeElement.innerText = `${time < 10 ? '0' + time : time}:00`
   minute = time * 60
}

function reset() {
   pomodoroState.innerText = 'START'
   initial = true
   circleTimer.style.animationName = ''
   circleTimer.style.animationDuration = ''
   circleTimer.style.animationPlayState = ''
   alternateStartAndPause = true

   clearInterval(pomodoro)
   clearInterval(timeSound)
   timerBeep.pause()
   

   mainElement.classList.remove('timeout')

   pomodoroButtons.forEach((btn, index) => {
      if (!btn.classList.contains('inative')) {
         if (index == 0) formatTimer(getStartMinutes.value)
         if (index == 1) formatTimer(short_break.value)
         if (index == 2) formatTimer(long_break.value)
      }
   })
}