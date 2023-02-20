const toggleMenuBtn = document.querySelector('#toggle_menu')
const menu = document.querySelector('.nav_buttons')

toggleMenuBtn.addEventListener('click', () => {
  toggleMenuBtn.classList.toggle('active')
  menu.classList.toggle('active')
})