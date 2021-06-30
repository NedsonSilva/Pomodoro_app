const short_break = document.getElementById('short_break')
const long_break = document.getElementById('long_break')
const pomodoroButtons = document.querySelectorAll('.menu button')

function pomodoroTimer() {
   getStartMinutes.value = 25
   pomodoroButtons[0].classList.remove('inative')
   pomodoroButtons[1].classList.add('inative')
   pomodoroButtons[2].classList.add('inative')
   reset()
}

function shortBreak() {
   getStartMinutes.value = short_break.value
   pomodoroButtons[0].classList.add('inative')
   pomodoroButtons[1].classList.remove('inative')
   pomodoroButtons[2].classList.add('inative')
   reset()
}

function longBreak() {
   getStartMinutes.value = long_break.value
   pomodoroButtons[0].classList.add('inative')
   pomodoroButtons[1].classList.add('inative')
   pomodoroButtons[2].classList.remove('inative')
   reset()
}