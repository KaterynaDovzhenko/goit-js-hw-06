function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtn = document.querySelector('.change-color');
const body = document.body;
const spanColor = document.querySelector('.color');

const changeColor = () => {
  spanColor.textContent = body.style.backgroundColor = getRandomHexColor();
}

changeBtn.addEventListener('click', changeColor);

