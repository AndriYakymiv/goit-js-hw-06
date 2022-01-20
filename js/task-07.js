const getInput = document.querySelector('#font-size-control');
const spanInInput = document.querySelector('#text');
spanInInput.style.fontSize = `${getInput.value}px`;
const onRangeChange = (event) => {
  spanInInput.style.fontSize = `${event.currentTarget.value}px`
}

getInput.addEventListener('input', onRangeChange )