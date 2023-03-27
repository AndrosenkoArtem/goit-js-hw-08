// var debounce = require('lodash.debounce');
// const LOCALSTORAGE_KEY = 'feedback-form-state';
// const formRef = document.querySelector('.feedback-form');
// checkFromValueOnLocalStorage();
// function onFormValue(e) {
//   const FormUseraData = { email: '', message: '' };
//   FormUseraData.email = e.target.form.email.value;
//   FormUseraData.message = e.target.form.message.value;
//   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(FormUseraData));
// }
// function checkFromValueOnLocalStorage() {
//   const formObjectValues = localStorage.getItem(LOCALSTORAGE_KEY);

//   if (formObjectValues) {
//     formRef.email.value = JSON.parse(formObjectValues).email;
//     formRef.message.value = JSON.parse(formObjectValues).message;
//   }
// }
// function onSubmitForm(e) {
//   e.preventDefault();
//   e.currentTarget.reset();
//   console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
//   localStorage.removeItem(LOCALSTORAGE_KEY);
// }
// formRef.addEventListener('input', debounce(onFormValue, 500));
// formRef.addEventListener('submit', onSubmitForm);
var debounce = require('lodash.debounce');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const formRef = document.querySelector('.feedback-form');
checkFromValueOnLocalStorage();
function onFormValue(e) {
  const FormUseraData = { email: '', message: '' };
  FormUseraData.email = e.target.form.email.value;
  FormUseraData.message = e.target.form.message.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(FormUseraData));
}
function checkFromValueOnLocalStorage() {
  const formObjectValues = localStorage.getItem(LOCALSTORAGE_KEY);

  if (formObjectValues) {
    formRef.email.value = JSON.parse(formObjectValues).email;
    formRef.message.value = JSON.parse(formObjectValues).message;
  }
}
function onSubmitForm(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
formRef.addEventListener('input', debounce(onFormValue, 500));
formRef.addEventListener('submit', onSubmitForm);
