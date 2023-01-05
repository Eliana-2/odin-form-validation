import './style.css';
import {validateInput} from './modules/errorDisplay.js'
const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');

inputs.forEach((input) => {
  input.addEventListener('input', () => {
    validateInput(input);
  })
})

form.addEventListener('submit', (e) => {
  e.preventDefault();
  inputs.forEach((input) => {
    validateInput(input);
  })
})