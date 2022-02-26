const dropdownBtns = document.querySelectorAll('.ui-dropdown-btn');
const dropdownLists = document.querySelectorAll('.ui-box-dropdown');

dropdownBtns.forEach((el) => {
  el.addEventListener('click', (e) => {
    const currentBtn = e.currentTarget;

    dropdownBtns.forEach((item) => {
      if (item !== currentBtn) {
        item.classList.remove('ui-dropdown-active');
        item.setAttribute('aria-expanded', 'false');
      }
    });

    currentBtn.classList.toggle('ui-dropdown-active');
    currentBtn.setAttribute('aria-expanded', 'true');

    const currentList = el.parentElement.querySelector('.ui-box-dropdown');

    dropdownLists.forEach((item) => {
      if (item !== currentList) {
        item.classList.remove('ui-dropdown-active');
      }
    });

    currentList.classList.toggle('ui-dropdown-active');
  });
});
