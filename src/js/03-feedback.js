import throttle from 'lodash.throttle';

const formRefs = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

const formData = {};

onReloadPage();

formRefs.addEventListener('input', throttle(onInputForm, 500));
formRefs.addEventListener('submit', onSubmitForm);

function onInputForm(evt) {
  // formData[evt.target.name] = evt.target.value;
  formData.email = formRefs.email.value;
  formData.message = formRefs.message.value;

  const formDataJSON = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, formDataJSON);
}

function onSubmitForm(evt) {
  evt.preventDefault();

  if (formRefs.email.value === '' || formRefs.message.value === '') {
    alert('FORM FIELDS MUST BE COMPLETED !!!');
    return;
  }
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
}

function onReloadPage() {
  const jsontLocalStorage = localStorage.getItem(STORAGE_KEY);

  if (jsontLocalStorage) {
    const parseLocalStorage = JSON.parse(jsontLocalStorage);
    const { email, message } = parseLocalStorage;

    formRefs.email.value = email;
    formRefs.message.value = message;

    formData.email = email;
    formData.message = message;
  }
}
