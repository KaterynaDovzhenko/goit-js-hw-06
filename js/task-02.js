const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// ingredients.forEach(element => {
//   const list = document.querySelector('#ingredients');
//   const li = document.createElement('li');
//   li.textContent = element;
//   li.classList.add('item');
//   list.append(li);
//   // console.log(list)
//   console.log(list)
// });


const ingredientsRef = document.querySelector('#ingredients');

const itemsRef = ingredients.map((ingredient) => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');
  return item;
});

ingredientsRef.append(...itemsRef);
