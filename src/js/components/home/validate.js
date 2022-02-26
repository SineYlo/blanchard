import JustValidate from 'just-validate';

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
      rule: 'number',
      errorMessage: 'Неверный формат',
    },
  ]);
