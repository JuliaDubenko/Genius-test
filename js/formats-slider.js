const swiper = new Swiper('.swiper-conteiner', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination-button',
    bulletActiveClass: 'pagination-button--active',
  },
  navigation: {
    nextEl: '.carousel-button__next',
    prevEl: '.carousel-button__prev',
  },
});
