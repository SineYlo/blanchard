const burgerBtn = document.querySelector('.ui-burger-btn');
const navMenu = document.querySelector('.ui-nav-content');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('ui-burger-active');
  navMenu.classList.toggle('ui-burger-active');

  if (burgerBtn.classList.contains('ui-burger-active')) {
    burgerBtn.setAttribute('aria-expanded', 'true');
    burgerBtn.setAttribute('aria-label', 'Закрыть основное меню.');
  } else {
    burgerBtn.setAttribute('aria-expanded', 'false');
    burgerBtn.setAttribute('aria-label', 'Открыть основное меню.');
  }
});
