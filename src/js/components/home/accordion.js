const accordionBoxes = document.querySelectorAll('.ui-box-accordion');

const accordion = (el) => {
  const accordionBtn = el.querySelector('.js-accordion-btn');
  const accordionContent = el.querySelector('.ui-content-accordion');

  el.classList.toggle('ui-accordion-active');

  if (el.classList.contains('ui-accordion-active')) {
    accordionBtn.setAttribute('aria-expanded', true);
    accordionContent.setAttribute('aria-hidden', false);
    accordionContent.style.maxHeight = `${accordionContent.scrollHeight}px`;
  } else {
    accordionBtn.setAttribute('aria-expanded', false);
    accordionContent.setAttribute('aria-hidden', true);
    accordionContent.style.maxHeight = null;
  }
};

accordion(document.querySelector('.open'));

accordionBoxes.forEach((el) => {
  el.addEventListener('click', (e) => {
    const thisElement = e.currentTarget;
    accordion(thisElement);
  });
});
