const toggleMenuBtn = document.querySelector('#toggle_menu')
const menu = document.querySelector('.nav_buttons')

toggleMenuBtn.addEventListener('click', () => {
  toggleMenuBtn.classList.toggle('active')
  menu.classList.toggle('active')
})

// moviment badge with mouse 
const badgeElement = document.querySelector('.badge')
let badgePosition = badgeElement.getBoundingClientRect()
let badgeCenterXPosition = badgePosition.x + 101;
let badgeCenterYPosition = badgePosition.y + 101;

const rotateBedge = (event) => {
  const mouseX = event.clientX; 
  const mouseY = event.clientY;

  const offsetX = ((mouseX - badgeCenterXPosition) / badgeCenterXPosition) * 40; 
  const offsetY = ((mouseY - badgeCenterYPosition) / badgeCenterYPosition) * 40; 
  
  const limitedX = (offsetX > 40 ? 40 : offsetX) < -40 ? -40 : offsetX;
  const limitedY = (offsetY > 40 ? 40 : offsetY) < -40 ? -40 : offsetY;

  badgeElement.style.setProperty("--x-rotation", limitedY * -1 + 'deg')
  badgeElement.style.setProperty("--y-rotation", limitedX + 'deg')
}

addEventListener('resize', () => {
  badgePosition = badgeElement.getBoundingClientRect()

  // sorry for this magic numbers
  badgeCenterXPosition = badgePosition.x + 101;
  badgeCenterYPosition = badgePosition.y + 99;

})

addEventListener('mousemove', e => {
  let isMobile = window.matchMedia("(any-pointer:coarse)").matches;

  if(e.clientY < 600 && !isMobile) {
    rotateBedge(e)
  }
})
