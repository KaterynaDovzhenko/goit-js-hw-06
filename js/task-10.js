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
// const btnCreate = button.dataset.create



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




// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.


// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.