// LOADER
window.addEventListener('load', () => {

  const loader = document.getElementById('loader')

  loader.style.opacity = '0'

  setTimeout(() => {
    loader.style.display = 'none'
  },1000)

})

// AOS
AOS.init({
  duration:1200,
  once:true,
})

// NAVBAR SCROLL
const navbar = document.getElementById('navbar')

window.addEventListener('scroll', () => {

  if(window.scrollY > 50){
    navbar.classList.add('navbar-scroll')
  }else{
    navbar.classList.remove('navbar-scroll')
  }

})

// MOBILE MENU
const menuBtn = document.getElementById('menu-btn')
const mobileMenu = document.getElementById('mobile-menu')

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden')
})

// COUNTER
const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {

  const updateCounter = () => {

    const target = +counter.getAttribute('data-target')
    const count = +counter.innerText

    const increment = target / 100

    if(count < target){

      counter.innerText = Math.ceil(count + increment)

      setTimeout(updateCounter,20)

    }else{

      counter.innerText = target + '+'

    }

  }

  updateCounter()

})

// SWIPER
const gallerySwiper = new Swiper(".gallerySwiper", {

  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: ".gallery-next",
    prevEl: ".gallery-prev",
  },

  autoplay: {
    delay: 3000,
  },

  breakpoints: {

    768: {
      slidesPerView: 2,
    },

    1200: {
      slidesPerView: 3,
    },

  }

})

