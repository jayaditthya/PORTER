document.addEventListener('DOMContentLoaded', function () {
    let menu = document.querySelector('#menu-btn');
    let navbar = document.querySelector('.navbar');

    menu.onclick = () => {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    }
});
window.onscroll = () => {
    const header = document.querySelector('.header');
    const isScrolled = window.scrollY > 0;

    header.classList.toggle('active', isScrolled);

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () => {
    document.querySelector('.login-form').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () => {
    document.querySelector('.login-form').classList.remove('active');
}

document.querySelector('#user-details').onclick = () => {
    document.querySelector('.dropdown').classList.toggle('active');
}

var swiper = new Swiper(".vehicles-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});