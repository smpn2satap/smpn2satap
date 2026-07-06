// =====================
// MOBILE MENU
// =====================

const menuBtn = document.getElementById("menu-btn")
const mobileMenu = document.getElementById("mobile-menu")

menuBtn.addEventListener("click", () => {

  mobileMenu.classList.toggle("active")

  // ICON CHANGE
  if(mobileMenu.classList.contains("active")){

    menuBtn.innerHTML =
    `<i class="ri-close-line"></i>`

  }else{

    menuBtn.innerHTML =
    `<i class="ri-menu-3-line"></i>`

  }

})


// =====================
// LOADER
// =====================

window.addEventListener("load", () => {

  const loader = document.getElementById("loader")

  setTimeout(() => {

    loader.classList.add("hide-loader")

  }, 1200)

})


// =====================
// NAVBAR SCROLL
// =====================

const navbar = document.getElementById("navbar")

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    navbar.classList.add("navbar-scroll")

  }else{

    navbar.classList.remove("navbar-scroll")

  }

})


// =====================
// COUNTER ANIMATION
// =====================

const counters = document.querySelectorAll(".counter")

counters.forEach(counter => {

  const updateCounter = () => {

    const target = +counter.getAttribute("data-target")

    const count = +counter.innerText

    const increment = target / 100

    if(count < target){

      counter.innerText = Math.ceil(count + increment)

      setTimeout(updateCounter, 20)

    }else{

      counter.innerText = target

    }

  }

  updateCounter()

})


// =====================
// AOS
// =====================

AOS.init({

  duration:1200,
  once:true,

})


// =====================
// SWIPER
// =====================

const gallerySwiper = new Swiper(".gallerySwiper", {

  slidesPerView:1,
  spaceBetween:30,
  loop:true,

  autoplay:{
    delay:3000,
    disableOnInteraction:false,
  },

  navigation:{
    nextEl:".gallery-next",
    prevEl:".gallery-prev",
  },

  breakpoints:{

    768:{
      slidesPerView:2,
    },

    1200:{
      slidesPerView:3,
    }

  }

})


// =====================
// SMOOTH SCROLL
// =====================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function(e){

    e.preventDefault()

    const target = document.querySelector(this.getAttribute("href"))

    if(target){

      target.scrollIntoView({
        behavior:"smooth"
      })

    }

  })

})

function scrollToSection(){

  document.getElementById("tentang")
  .scrollIntoView({
    behavior:"smooth"
  });

}