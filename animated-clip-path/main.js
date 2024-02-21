initAnimationPreset()
preloadImages()

// section-1
const tl1 = gsap.timeline()
tl1
  .from('.content__scroll span', {
    duration: 2,
    text: {
      value: ''
    },
    ease: 'none'
  })
  .to('.content__scroll span', {
    scale: 1.2,
    repeat: -1,
    yoyo: true,
    duration: 1
  })

// section-2 title
gsap.to('.section-2__title', {
  scale: 1.2,
  ease: 'power2.inOut',
  scrollTrigger: {
    trigger: '.section-2',
    start: 'top center',
    end: '+=500',
    scrub: 1
  }
})

// section-3
gsap
  .timeline({
    scrollTrigger: {
      trigger: '.section-3',
      start: 'top 250px', // 元素顶部 距离视图顶部50px
      end: 'top 50px', // 元素顶部 视图顶部
      scrub: 1
    }
  })
  .to('.image-holder', {
    rotate: 0,
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
  })
  .to(
    '.image-holder img',
    {
      scale: 2,
      filter: 'blur(0px)',
      ease: 'power2.inOut'
    },
    0
  )
  .to(
    '.section-3__title',
    {
      color: '#b48d6e',
      ease: 'power2.inOut'
    },
    0
  )

// svg seperator
const paths = [...document.querySelectorAll('path.path-anim')]
paths.forEach((el) => {
  const svgEl = el.closest('svg')
  const pathTo = el.dataset.pathTo

  gsap
    .timeline({
      scrollTrigger: {
        trigger: svgEl,
        start: 'top 50%',
        end: 'top 10%',
        scrub: true
      }
    })
    .to(el, {
      ease: 'none',
      attr: { d: pathTo }
    })
})

// svg image
const images = [...document.querySelectorAll('img.path-anim')]
images.forEach((el) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top center',
        end: '+=150',
        scrub: 1
      }
    })
    .fromTo(
      el,
      { clipPath: 'circle(0% at 50% 50%)' },
      { clipPath: 'circle(80% at 50% 50%)', duration: 1 }
    )
})

// footer
gsap
  .timeline({
    scrollTrigger: {
      trigger: 'section:last-of-type',
      start: 'top center',
      end: '+=150',
      scrub: 1
    }
  })
  .to('footer', {
    opacity: 1
  })

function preloadImages() {
  const body = document.body
  return new Promise((resolve) => {
    const imgwrap = document.createElement('div')
    imgwrap.style.visibility = 'hidden'
    body.appendChild(imgwrap)
    ;[...document.querySelectorAll('image')].forEach((el) => {
      const imgEl = document.createElement('img')
      imgEl.style.width = 0
      imgEl.src = el.getAttribute('xlink:href')
      imgEl.className = 'preload'
      imgwrap.appendChild(imgEl)
    })

    const arrImg = [
      ...document.querySelectorAll('.preload'),
      ...document.querySelectorAll('.content__bg')
    ]
    imagesLoaded(arrImg, { background: true }, (_) => {
      imgwrap.parentNode.removeChild(imgwrap)
      body.classList.remove('loading')
      resolve()
    })
  })
}

function initAnimationPreset() {
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(TextPlugin)
  const lenis = new Lenis()
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0)
}
