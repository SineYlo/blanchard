import superplaceholder from 'superplaceholder';

superplaceholder({
  el: document.querySelector('.js-search-bottom'),
  sentences: ['Пример: Картины', 'В ожидании запроса :-)'],
  options: {
    letterDelay: 40,
    sentenceDelay: 700,
  },
});

superplaceholder({
  el: document.querySelector('.js-callback-field-name'),
  sentences: ['Пример: Иван'],
  options: {
    letterDelay: 40,
    sentenceDelay: 700,
  },
});
