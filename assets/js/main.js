const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

gsap.from('.home__snow-back-left', 1, {opacity: 0, y: 200, delay: 0.1})
gsap.from('.home__snow-back-right', 1, {opacity: 0, y: 200, delay: 0.5})
gsap.from('.home__snow-front-left', 1, {opacity: 0, y: 200, delay: 0.8})
gsap.from('.home__snow-front-right', 1, {opacity: 0, y: 200, delay: 1.1})
gsap.from('.home_christmas-tree', 1, {opacity: 0, y: 200, delay: 1.5, ease: "back.out(1.2)"})
gsap.from('.home__house-2', 1, {opacity: 0, y: 200, delay: 2, ease: "bounce.out"})
gsap.from('.home__house-4', 1, {opacity: 0, y: 200, delay: 2.5, ease: "bounce.out"})
gsap.from('.home__spruce-left-3', 1, {opacity: 0, x: -100, rotation: -20, delay: 3, ease: "back.out(1.2)"})
gsap.from('.home__spruce-left-2', 1, {opacity: 0, x: -100, rotation: -20, delay: 3.5, ease: "back.out(1.2)"})
gsap.from('.home__spruce-left-1', 1, {opacity: 0, x: -100, rotation: -20, delay: 4, ease: "back.out(1.2)"})
gsap.from('.home__spruce-right-1', 1, {opacity: 0, x: 100, rotation: 20, delay: 3.5, ease: "back.out(1.2)"})
gsap.from('.home__spruce-right-2', 1, {opacity: 0, x: 100, rotation: 20, delay: 4, ease: "back.out(1.2)"})
gsap.from('.home__house-1', 1, {opacity: 0, y: 200, delay: 4.5, ease: "bounce.out"})
gsap.from('.home__house-3', 1, {opacity: 0, y: 200, delay: 5, ease: "bounce.out"})
gsap.from('.home__spruce-white-right', 1, {opacity: 0, y: 200, delay: 5.5, ease: "back.out(1.2)"})
gsap.from('.home__spruce-white-left', 1, {opacity: 0, y: 200, delay: 5.5, ease: "back.out(1.2)"})
gsap.from('.home__title', 1, {opacity: 0, y: 200, delay: 5.5, ease: "back.out(1.2)"})