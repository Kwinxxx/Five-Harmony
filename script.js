
const swiper = new Swiper('.swiper', {
  spaceBetween: 20,
  speed: 200,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    addIcons: false,
  },

  scrollbar : {
    el : '.swiper-scrollbar',
   draggable: true,
  }

  breakpoint {
    768 : {
      spaceBetween: 10,
      slidesPerView: 1
    }
  }
});