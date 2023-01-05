function showError(input, message) {
  const inputErrorMessage = input.nextElementSibling;
  inputErrorMessage.textContent = message;
  input.classList.add('error');
}

function clearError(input) {
  const inputErrorMessage = input.nextElementSibling;
  inputErrorMessage.textContent = '';
  input.classList.remove('error');
}

function isValidPassword(password) {
  if(password.match('[^A-Za-z0-9!@#$%^&*]') !== null) {
    return false}
  else if (password.match('[A-Z]') === null) {return false}
  else if (password.match('[\d]') === null) {return false}
  else if (password.match('[!@#$%^&*]') === null) {return false}
  else {return true}
}

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
      case 'password':
        if(!(isValidPassword(input.value))) {showError(input, 'Password must contain at least one capital letter, one number, and one special character')}
        break;
      case 'password_confirmation':
        if(input.value !== document.getElementById('password').value) {showError(input, 'Passwords must match')}
        break;
  }}
}

export {validateInput};