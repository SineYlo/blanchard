import {
  disablePageScroll,
  enablePageScroll,
  addFillGapTarget,
  setFillGapMethod,
} from 'scroll-lock';

const btnsModalOpen = document.querySelectorAll('.js-gallery-modal-btn');
const btnModalClose = document.querySelector('.js-modal-close');
const modalOverlay = document.querySelector('.ui-modals-overlay');
const modalWindow = document.querySelector('.ui-gallery-box-modal');

addFillGapTarget(modalOverlay);
setFillGapMethod('padding');

btnsModalOpen.forEach((el) => {
  el.addEventListener('click', (e) => {
    const currentBtn = e.currentTarget.getAttribute('data-modal-btn');

    modalWindow.classList.remove('ui-modal-active');

    document.querySelector(`[data-modal-content='${currentBtn}']`).classList.add('ui-modal-active');

    modalOverlay.classList.add('ui-modal-active');

    disablePageScroll(modalWindow);
  });
});

btnModalClose.addEventListener('click', () => {
  modalWindow.classList.remove('ui-modal-active');
  modalOverlay.classList.remove('ui-modal-active');

  enablePageScroll(modalWindow);
});

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove('ui-modal-active');
    modalWindow.classList.remove('ui-modal-active');

    enablePageScroll(modalWindow);
  }
});
