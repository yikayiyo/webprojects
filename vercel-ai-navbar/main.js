const navBtns = document.querySelectorAll('.navigation-menu_list > li')
const navBtnsHighLight = document.querySelector(
  '.navigation-menu_tabsHighlight'
)

navBtns.forEach((el) => {
  el.addEventListener('mouseenter', () => {
    console.log(el.getBoundingClientRect())
    const { x, width } = el.getBoundingClientRect()
    navBtnsHighLight.style = `
      opacity: 1; 
      transition-duration: 150ms; 
      width: ${width}px; 
      transform: translate(${x - 153}px)`  // first item is 153px to the left
  })
  el.addEventListener('mouseleave', () => {
    navBtnsHighLight.style.opacity = 0
  })
})
