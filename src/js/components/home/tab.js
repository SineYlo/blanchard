const tabAuthorBtns = document.querySelectorAll('.js-tab-btn');
const tabContents = document.querySelectorAll('.ui-box-tab');

tabAuthorBtns.forEach((el) => {
  el.addEventListener('click', (e) => {
    const currentBtn = el;
    const dataBtn = e.currentTarget.dataset.tabBtn;
    const currentTab = document.querySelector(`[data-tab-content="${dataBtn}"]`);

    tabAuthorBtns.forEach((item) => {
      item.classList.remove('ui-tab-active');
      item.setAttribute('aria-expanded', 'false');
    });

    currentBtn.classList.add('ui-tab-active');
    currentBtn.setAttribute('aria-expanded', 'true');

    tabContents.forEach((item) => {
      item.classList.remove('ui-tab-active');
    });

    currentTab.classList.add('ui-tab-active');
  });
});
