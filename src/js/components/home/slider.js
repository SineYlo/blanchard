/* eslint-disable no-unused-vars */
import Swiper from 'swiper/swiper-bundle';

const swiperHero = new Swiper('.js-swiper-hero', {
  effect: 'coverflow',

  coverflowEffect: {
    rotate: 10,
    slideShadows: false,
  },

  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  a11y: {
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд',
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
});

const swiperGallery = new Swiper('.js-swiper-gallery', {
  navigation: {
    nextEl: '.swiper-gallery__next',
    prevEl: '.swiper-gallery__prev',
  },

  pagination: {
    el: '.swiper-gallery__pagination',
    type: 'fraction',
  },

  breakpoints: {
    320: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },

  a11y: {
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд',
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
});

const swiperEvents = new Swiper('.js-swiper-events', {
  navigation: {
    nextEl: '.swiper-events-next',
    prevEl: '.swiper-events-prev',
  },

  pagination: {
    el: '.swiper-events__pagination',
    type: 'bullets',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },

  a11y: {
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд',
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },
});

const swiperProjects = new Swiper('.js-swiper-projects', {
  navigation: {
    nextEl: '.swiper-projects-next',
    prevEl: '.swiper-projects-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },

  a11y: {
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд',
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
});
