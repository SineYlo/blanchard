const searchOpenBtn = document.querySelector('.js-open-search');
const searchCloseBtn = document.querySelector('.js-close-search');
const boxSearch = document.querySelector('.ui-box-search');

searchOpenBtn.addEventListener('click', () => {
  boxSearch.classList.add('ui-search-active');
});

searchCloseBtn.addEventListener('click', () => {
  boxSearch.classList.remove('ui-search-active');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    boxSearch.classList.remove('ui-search-active');
  }
});
