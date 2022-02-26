document.querySelectorAll('a[href^="#"').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const href = e.currentTarget.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = 0;

    const elementPosition = scrollTarget.getBoundingClientRect().top;

    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });
  });
});
