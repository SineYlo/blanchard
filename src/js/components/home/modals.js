const btnsModalOpen = document.querySelectorAll('.js-gallery-modal-btn');
const btnModalClose = document.querySelector('.js-modal-close');
const modalOverlay = document.querySelector('.ui-modals-overlay');
const modalWindow = document.querySelector('.ui-gallery-box-modal');
const siteBody = document.querySelector('.ui-body');

function hiddenScroll() {
  const pagePosition = window.scrollY;

  siteBody.classList.add('scroll-hidden');
  siteBody.dataset.position = pagePosition;
  siteBody.style.top = `${-pagePosition}px`;
}

function visibleScroll() {
  const pagePosition = parseInt(siteBody.dataset.position, 10);

  siteBody.style.top = 'auto';
  siteBody.classList.remove('scroll-hidden');

  window.scroll({
    top: pagePosition,
    left: 0,
  });

  siteBody.removeAttribute('data-position');
}

btnsModalOpen.forEach((el) => {
  el.addEventListener('click', (e) => {
    const currentBtn = e.currentTarget.getAttribute('data-modal-btn');

    modalWindow.classList.remove('ui-modal-active');

    document.querySelector(`[data-modal-content='${currentBtn}']`).classList.add('ui-modal-active');

    modalOverlay.classList.add('ui-modal-active');

    hiddenScroll();
  });
});

btnModalClose.addEventListener('click', () => {
  modalWindow.classList.remove('ui-modal-active');
  modalOverlay.classList.remove('ui-modal-active');

  visibleScroll();
});

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove('ui-modal-active');
    modalWindow.classList.remove('ui-modal-active');

    visibleScroll();
  }
});
