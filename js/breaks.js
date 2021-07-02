function selectButton(id) {
   pomodoroButtons.forEach((btn, index) => {
      if (index != id)
         btn.classList.add('inative')
      else
         btn.classList.remove('inative')
   })
}

function pomodoroTimer() {
   selectButton(0)
   formatTimer(getStartMinutes.value)
   reset()
}

function shortBreak() {
   selectButton(1)
   formatTimer(short_break.value)
   reset()
}

function longBreak() {
   selectButton(2)
   formatTimer(long_break.value)
   reset()
}