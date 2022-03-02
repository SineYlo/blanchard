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

    if (currentBtn.classList.contains('ui-dropdown-active')) {
      currentBtn.setAttribute('aria-expanded', 'true');
    } else {
      currentBtn.setAttribute('aria-expanded', 'false');
    }

    const currentList = el.parentElement.querySelector('.ui-box-dropdown');

    dropdownLists.forEach((item) => {
      if (item !== currentList) {
        item.classList.remove('ui-dropdown-active');
      }
    });

    currentList.classList.toggle('ui-dropdown-active');
  });
});

document.addEventListener('click', (e) => {
  const { target } = e;

  if (!target.closest('.list-header')) {
    document.querySelectorAll('.ui-box-dropdown').forEach((el) => {
      el.classList.remove('ui-dropdown-active');
    });

    document.querySelectorAll('.ui-dropdown-btn').forEach((el) => {
      el.classList.remove('ui-dropdown-active');
      el.setAttribute('aria-expanded', 'false');
    });
  }
});
