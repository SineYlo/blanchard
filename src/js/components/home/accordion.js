const accordionBoxes = document.querySelectorAll('.ui-box-accordion');

accordionBoxes.forEach((el) => {
  el.addEventListener('click', (e) => {
    const thisElement = e.currentTarget;
    const accordionBtn = thisElement.querySelector('.js-accordion-btn');
    const accordionContent = thisElement.querySelector('.ui-content-accordion');

    thisElement.classList.toggle('ui-accordion-active');

    if (thisElement.classList.contains('ui-accordion-active')) {
      accordionBtn.setAttribute('aria-expanded', true);
      accordionContent.setAttribute('aria-hidden', false);
      accordionContent.style.maxHeight = `${accordionContent.scrollHeight}px`;
    } else {
      accordionBtn.setAttribute('aria-expanded', false);
      accordionContent.setAttribute('aria-hidden', true);
      accordionContent.style.maxHeight = null;
    }
  });
});
