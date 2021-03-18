const buttonForm = document.querySelector('.form__button');
const buttonFailure = document.querySelector('.failure-pop-up__button');
const buttonSuccess = document.querySelector('.success-pop-up__button');
const popUp = document.querySelector('.failure-pop-up');
const successPopUp = document.querySelector('.success-pop-up');
const form = document.querySelector('.form');
const inputContact = document.querySelector('.contact-info__input');

buttonForm.addEventListener('click', function (evt) {
  evt.preventDefault();
  popUp.classList.add('failure-pop-up--show');
  successPopUp.classList.add('success-pop-up--show');
});

buttonFailure.addEventListener('click', function (evt) {
  evt.preventDefault();
  popUp.classList.remove('failure-pop-up--show');
});

buttonSuccess.addEventListener('click', function (evt) {
  evt.preventDefault();
  successPopUp.classList.remove('success-pop-up--show');
});
