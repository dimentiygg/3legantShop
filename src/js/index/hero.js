import Swiper from 'swiper';
import 'swiper/css';
// import 'swiper/css/pagination';
import { Navigation, Keyboard, Mousewheel, Pagination } from 'swiper/modules';

const aboutMeSwiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  modules: [Navigation, Keyboard, Mousewheel, Pagination],

  keyboard: {
    enabled: true,
  },
  mousewheel: {
    enabled: true,
    forceToAxis: true,
  },
  pagination: {
    enabled: true,
    el: '.swiper-pagination',
    clickable: true,
  },
});
