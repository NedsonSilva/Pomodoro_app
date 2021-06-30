const body = document.body
const altColor = document.querySelectorAll('.list-colors li')
const altFont  = document.querySelectorAll('.list-fonts li')

let color1 = 'color-theme1'
let color2 = 'color-theme2'
let color3 = 'color-theme3'
let colorSelected = 1;
let font1 = 'font-type1'
let font2 = 'font-type2'
let font3 = 'font-type3'
let fontSelected = 1

function color() {
   if(this.classList.contains(color1)) {
      this.innerHTML = '<img src="assets/icons/selected-icon.png" alt="">'
      altColor[1].innerHTML = ''
      altColor[2].innerHTML =''
      colorSelected = 1
   }else if(this.classList.contains(color2)) {
      this.innerHTML = '<img src="assets/icons/selected-icon.png" alt="">'
      altColor[0].innerHTML = ''
      altColor[2].innerHTML = ''
      colorSelected = 2
   }else {
      this.innerHTML = '<img src="assets/icons/selected-icon.png" alt="">'
      altColor[0].innerHTML  = ''
      altColor[1].innerHTML  = ''
      colorSelected = 3
   }
}

function font() {
   if(this.classList.contains(font1)) {
      this.classList.add('selected')
      altFont[1].classList.remove('selected')
      altFont[2].classList.remove('selected')
      fontSelected = 1
   }else if(this.classList.contains(font2)) {
      this.classList.add('selected')
      altFont[0].classList.remove('selected')
      altFont[2].classList.remove('selected')
      fontSelected = 2
   }else {
      this.classList.add('selected')
      altFont[0].classList.remove('selected')
      altFont[1].classList.remove('selected')
      fontSelected = 3
   }
}

altColor.forEach( current => current.addEventListener('click', color))
altFont.forEach( current => current.addEventListener('click', font))