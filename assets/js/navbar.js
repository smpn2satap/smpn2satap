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

// SMOOTH SCROLL FOR HASH LINKS
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');

    // ignore plain '#' links but prevent default so page won't jump to top
    if (!href) return;
    if (href === '#') {
      e.preventDefault();
      return;
    }

    const target = document.querySelector(href);

    if (target) {
      e.preventDefault();

      // compute offset for fixed navbar
      const header = document.getElementById('navbar');
      const offset = header ? header.offsetHeight : 0;

      const top = target.getBoundingClientRect().top + window.pageYOffset - offset - 8;

      window.scrollTo({ top, behavior: 'smooth' });

      // close mobile menu if open
      if (mobileMenu && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        // restore menu icon
        const icon = menuBtn.querySelector('i');
        if (icon) {
          icon.classList.remove('ri-close-line');
          icon.classList.add('ri-menu-line');
        }
      }
    }
  });
});

// Add click-to-scroll for elements using data-scroll-target attribute
document.querySelectorAll('[data-scroll-target]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const sel = btn.getAttribute('data-scroll-target');
    if (!sel) return;
    const target = document.querySelector(sel);
    if (!target) return;

    e.preventDefault();
    const header = document.getElementById('navbar');
    const offset = header ? header.offsetHeight : 0;
    const top = target.getBoundingClientRect().top + window.pageYOffset - offset - 8;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});