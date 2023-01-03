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

export {showError, clearError};