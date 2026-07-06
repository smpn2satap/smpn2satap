const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {

  mobileMenu.classList.toggle("active");

  // GANTI ICON
  const icon = menuBtn.querySelector("i");

  if (mobileMenu.classList.contains("active")) {

    icon.classList.remove("ri-menu-line");
    icon.classList.add("ri-close-line");

  } else {

    icon.classList.remove("ri-close-line");
    icon.classList.add("ri-menu-line");

  }

});

// AUTO RESET SAAT BALIK DESKTOP
window.addEventListener("resize", () => {

  if (window.innerWidth > 992) {

    mobileMenu.classList.remove("active");

    const icon = menuBtn.querySelector("i");

    icon.classList.remove("ri-close-line");
    icon.classList.add("ri-menu-line");

  }

});