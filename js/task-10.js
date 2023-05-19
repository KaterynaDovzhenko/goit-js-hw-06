function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divBoxes = document.querySelector('#boxes');
const controlRef = document.querySelector('#controls');
const inputEl = controlRef.firstElementChild;
const btnCreate =inputEl.nextElementSibling;
const btnDestroy = btnCreate.nextElementSibling;


btnDestroy.addEventListener('click', onClickDestroy);
btnCreate.addEventListener('click', () => {

const inputValue = inputEl.value.trim();

  if (
    +(inputValue) > +(inputEl.max) ||
    +(inputValue) < +(inputEl.min)
  ) {
    alert('Enter number from 1 to 100!');
  } else {
    createBoxes(inputValue);
  }
});

function createBoxes(amount) {
  let size = 30;
  const boxesArr = [];

  for (let i = 0; i < amount; i += 1) {
    size += 10 * i;
    const div = `<div style="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
    boxesArr.push(div);
  }
  divBoxes.insertAdjacentHTML('beforeend', boxesArr.join(''));
}

function onClickDestroy() {
   inputEl.value = '';
  divBoxes.innerHTML = '';
}
