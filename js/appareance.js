const altColor = document.querySelectorAll('.list-colors li')
const altFont = document.querySelectorAll('.list-fonts li')

let colorSelected = 0;
let fontSelected = 0

const themeUtils = {
   colorConf(id) {
      altColor.forEach((cor, index) => {
         if (index == id) cor.innerHTML = '<img src="assets/icons/selected-icon.png" alt="">'
         else cor.innerHTML = ''
      })
   },

   fontConf(id) {
      altFont.forEach((font, index) => {
         if (index == id) font.classList.add('selected')
         else font.classList.remove('selected')
      })
   }
}

function color() {
   if (this.classList.contains('color-theme1')) {
      themeUtils.colorConf(0)
      colorSelected = 1
   } else if (this.classList.contains('color-theme2')) {
      themeUtils.colorConf(1)
      colorSelected = 2
   } else {
      themeUtils.colorConf(2)
      colorSelected = 3
   }
}

function font() {
   if (this.classList.contains('font-type1')) {
      themeUtils.fontConf(0)
      fontSelected = 1
   } else if (this.classList.contains('font-type2')) {
      themeUtils.fontConf(1)
      fontSelected = 2
   } else {
      themeUtils.fontConf(2)
      fontSelected = 3
   }
}

altColor.forEach(current => current.addEventListener('click', color))
altFont.forEach(current => current.addEventListener('click', font))