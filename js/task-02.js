const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const igredientsList = document.querySelector('#ingredients')
const listEl = ingredients.map(ingredient => {
  const list = document.createElement('li');
  list.textContent = ingredient;
  list.classList.add('item');
  console.log(list.textContent);
  return list;
  
});

igredientsList.append(...listEl);
