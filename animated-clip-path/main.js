gsap.registerPlugin(ScrollTrigger)
const lenis = new Lenis()
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0)

// section-2 title
gsap.to('.section-2__title', {
  scale: 1.2,
  ease: 'power2.inOut',
  scrollTrigger: {
    trigger: '.section-2',
    start: 'top center',
    end: '+=500',
    scrub: 1
  },
  marker: true
})

// section-3
gsap
  .timeline({
    scrollTrigger: {
      trigger: '.section-3',
      start: 'top 250px', // 元素顶部 距离视图顶部50px
      end: 'top 50px', // 元素顶部 视图顶部
      scrub: 1,
      markers: true
    }
  })
  .to('.image-holder', {
    rotation: 0,
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
  })
  .to(
    '.image-holder img',
    {
      scale: 2,
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
        start: 'top bottom',
        end: 'bottom top',
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
        scrub: 1,
      }
    })
    .fromTo(
      el,
      { clipPath: 'circle(0% at 50% 50%)' },
      { clipPath: 'circle(80% at 50% 50%)', duration: 1 }
    )
})
