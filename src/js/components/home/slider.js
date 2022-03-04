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
  spaceBetween: 20,

  navigation: {
    nextEl: '.swiper-gallery__next',
    prevEl: '.swiper-gallery__prev',
  },

  pagination: {
    el: '.swiper-gallery__pagination',
    type: 'fraction',
  },

  breakpoints: {
    621: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38,
    },

    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    1201: {
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
  spaceBetween: 20,

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
    767: {
      slidesPerView: 2,
      spaceBetween: 34,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 27,
    },

    1201: {
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
  spaceBetween: 20,

  navigation: {
    nextEl: '.swiper-projects-next',
    prevEl: '.swiper-projects-prev',
  },

  breakpoints: {
    621: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },

    1201: {
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
