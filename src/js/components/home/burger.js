import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import 'wicg-inert';

const burgerBtn = document.querySelector('.ui-burger-btn');
const navMenu = document.querySelector('.ui-nav-content');
const navLinks = document.querySelectorAll('.nav-header__link');
// Inert
const logo = document.querySelector('.logo-header');
const main = document.querySelector('.site-main');
const footer = document.querySelector('.site-footer');
const search = document.querySelector('.js-open-search');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('ui-burger-active');
  navMenu.classList.toggle('ui-burger-active');

  if (burgerBtn.classList.contains('ui-burger-active')) {
    burgerBtn.setAttribute('aria-expanded', 'true');
    burgerBtn.setAttribute('aria-label', 'Закрыть основное меню.');

    logo.inert = true;
    main.inert = true;
    footer.inert = true;
    search.inert = true;

    disablePageScroll(navMenu);
  } else {
    burgerBtn.setAttribute('aria-expanded', 'false');
    burgerBtn.setAttribute('aria-label', 'Открыть основное меню.');

    logo.inert = false;
    main.inert = false;
    footer.inert = false;
    search.inert = false;

    enablePageScroll(navMenu);
  }
});

navLinks.forEach((el) => {
  el.addEventListener('click', () => {
    burgerBtn.classList.remove('ui-burger-active');
    burgerBtn.setAttribute('aria-expanded', 'false');
    burgerBtn.setAttribute('aria-label', 'Открыть основное меню.');
    navMenu.classList.remove('ui-burger-active');

    logo.inert = false;
    main.inert = false;
    footer.inert = false;
    search.inert = false;

    enablePageScroll(navMenu);
  });
});
