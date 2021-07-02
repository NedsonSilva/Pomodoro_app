function selectButton(id) {
   pomodoroButtons.forEach((btn, index) => {
      if(index != id) btn.classList.add('inative')
      else btn.classList.remove('inative')
   })
}

function altClock(clock) {
   timeElement.innerText = `${clock < 10 ? '0' + clock: clock}:00`
   minutes = clock
}

function pomodoroTimer(element) {
   selectButton(0)
   altClock(getStartMinutes.value)
   if(element) reset()
}

function shortBreak(element) {
   selectButton(1)
   altClock(short_break.value)
   if(element) reset()
}

function longBreak(element) {
   selectButton(2)
   altClock(long_break.value)
   if(element) reset()
}
