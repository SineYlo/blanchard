import { disablePageScroll, enablePageScroll } from 'scroll-lock';

const burgerBtn = document.querySelector('.ui-burger-btn');
const navMenu = document.querySelector('.ui-nav-content');
const navLinks = document.querySelectorAll('.nav-header__link');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('ui-burger-active');
  navMenu.classList.toggle('ui-burger-active');

  if (burgerBtn.classList.contains('ui-burger-active')) {
    burgerBtn.setAttribute('aria-expanded', 'true');
    burgerBtn.setAttribute('aria-label', 'Закрыть основное меню.');

    disablePageScroll(navMenu);
  } else {
    burgerBtn.setAttribute('aria-expanded', 'false');
    burgerBtn.setAttribute('aria-label', 'Открыть основное меню.');

    enablePageScroll(navMenu);
  }
});

navLinks.forEach((el) => {
  el.addEventListener('click', () => {
    burgerBtn.classList.remove('ui-burger-active');
    burgerBtn.setAttribute('aria-expanded', 'false');
    burgerBtn.setAttribute('aria-label', 'Открыть основное меню.');
    navMenu.classList.remove('ui-burger-active');

    enablePageScroll(navMenu);
  });
});
