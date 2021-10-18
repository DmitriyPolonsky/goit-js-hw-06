const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const igredientsList = document.querySelector('#ingredients')

ingredients.forEach(ingredient => {
  const listEl = document.createElement('li');
  listEl.textContent = ingredient;
  listEl.classList.add('item');
  igredientsList.append(listEl);

  console.log(listEl);
});