import './style.css';
import {showError, clearError} from './modules/errorDisplay.js'
const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');

function validateInput(input) {
  clearError(input);
  if(input.validity.valueMissing) {showError(input, 'Required Field')}
  else if (input.validity.tooShort) {showError(input, input.previousElementSibling.textContent + ' must be at least ' + input.minLength + ' characters')}
  else {
    switch(input.id)
    {
      case 'email':
        if(input.validity.typeMismatch) {showError(input, 'Invalid Email')}
        break;
      case 'country':
        if(input.validity.patternMismatch) {showError(input, 'Country must consist of letters and spaces')}
        break;
      case 'zip_code':
        if(input.validity.patternMismatch) {showError(input, 'Zip Code must contain 5 digits')}
        break;
  }}
}

inputs.forEach((input) => {
  input.addEventListener('input', () => {
    validateInput(input);
  })
})

form.addEventListener('submit', (e) => {
  e.preventDefault();
})