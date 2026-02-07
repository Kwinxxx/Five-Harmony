import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
const swiper = new Swiper('.myswiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  slidesPerView: 4,
  spaceBetween: 30
});