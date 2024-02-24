const navBtns = document.querySelectorAll('.navigation-menu_list > li')
const navBtnsHighLight = document.querySelector(
  '.navigation-menu_tabsHighlight'
)

const panels = document.querySelectorAll('.navigation-menu_content')
const navMenuViewportWrapper = document.querySelector('.navigation-menu_viewportPosition')
const navMenuViewport = `
  <div data-state="false" data-orientation="horizontal" class="navigation-menu_viewport">
    ${Array.from(panels).reduce((a,b)=>a+b.outerHTML, '')}
  </div>
`

navBtns.forEach((el) => {
  const trigger = el.querySelector('.navigation-menu_trigger')
  el.addEventListener('mouseenter', () => {
    const { x, width } = el.getBoundingClientRect()
    navBtnsHighLight.style = `
      opacity: 1; 
      transition-duration: 150ms; 
      width: ${width}px; 
      transform: translate(${x - 153}px)
    `  // first item is 153px to the left
    el.dataset.highlighted = 'true'
    if(trigger) {
      trigger.dataset.state = 'open'
    }
    const panel = el.querySelector('.navigation-menu_content')
    console.log(panel);
    if(panel) {
      navMenuViewportWrapper.innerHTML = navMenuViewport
    }
  })

  el.addEventListener('mouseleave', () => {
    navBtnsHighLight.style.opacity = 0
    el.dataset.highlighted = 'false'
    navMenuViewportWrapper.innerHTML = null
    if(trigger) {
      trigger.dataset.state = 'closed'
    }
  })
})
