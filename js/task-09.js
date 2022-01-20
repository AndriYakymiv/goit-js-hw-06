function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector('.change-color')
const spanEl = document.querySelector('.color')

btnChangeColor.addEventListener('click', onBthChangeColor)

function onBthChangeColor() {
  const color = getRandomHexColor()
  document.body.style.backgroundColor = color;
  spanEl.textContent = `${color}`;
}
