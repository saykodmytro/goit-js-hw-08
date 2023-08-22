const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('textarea'),
};

refs.form.addEventListener('sabmit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);

function onFormSubmit(evt) {}

function onTextareaInput(evt) {
  const value = evt.currentTurget.value;
  console.log(value);
}
