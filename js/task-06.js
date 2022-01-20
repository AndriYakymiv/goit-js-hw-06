const getInput = document.querySelector('#validation-input')
const lengthSymbolsInput = getInput.dataset.length;

const onBlurInput = (event) => {
  if (event.currentTarget.value.length == lengthSymbolsInput) {
      event.currentTarget.classList.remove('invalid');
      event.currentTarget.classList.add('valid');
   } else {
      event.currentTarget.classList.remove('valid');
      event.currentTarget.classList.add('invalid');
   }
}

getInput.addEventListener('blur', onBlurInput)