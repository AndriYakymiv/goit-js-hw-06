let counterValue = 0

const refs = {
  decrement: document.querySelector("[data-action='decrement']"),
  increment: document.querySelector("[data-action='increment']"),
  value: document.getElementById('value'),
}

const changeValue = step => {
  counterValue = counterValue + step;
  refs.value.textContent = counterValue;
}

refs.increment.addEventListener('click', () => changeValue(+1))
refs.decrement.addEventListener('click', () => changeValue(-1))