/* eslint-disable no-console */
import JustValidate from 'just-validate';
import Inputmask from 'inputmask';

const fieldPhone = document.querySelector('.js-callback-field-phone');
const phoneMask = new Inputmask('+7-999-999-99-99');

phoneMask.mask(fieldPhone);

const validation = new JustValidate('.callback-form', {
  errorFieldCssClass: 'callback-form__field_invalid',
  errorLabelCssClass: 'callback-form__label-invalid',

  errorLabelStyle: {
    color: 'hsl(0 81% 45%)',
  },
});

validation
  .addField('.js-callback-field-name', [
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Минимальное кол-во букв - 2',
    },
    {
      rule: 'maxLength',
      value: 50,
      errorMessage: 'Максимальное кол-во букв - 50',
    },
    {
      rule: 'customRegexp',
      value: '^[A-zА-яЁё]+$',
      errorMessage: 'Неверный формат',
    },
    {
      rule: 'required',
      errorMessage: 'Это поле обязательное!',
    },
  ])
  .addField('.js-callback-field-phone', [
    {
      rule: 'required',
      errorMessage: 'Это поле обязательное!',
    },
    {
      rule: 'function',
      validator() {
        const phone = fieldPhone.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Не полностью введён номер телефона',
    },
  ])
  .onSuccess((e) => {
    const formData = new FormData(e.target);
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    };

    xhr.open('POST', '../mail.php', true);
    xhr.send(formData);

    e.target.reset();
  });
