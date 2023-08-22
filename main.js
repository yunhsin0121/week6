import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
console.log("Hello world!");

const swiper = new Swiper(".mySwiper", {
    allowTouchMove: false,
    slidesPerView: "auto",
    speed: 20000,
    loop: true,
    autoplay: {
      delay: 0,
    }
  });