const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('ul')
console.log(ingredientsList);

const ingredientsItem = ingredients.map(option => {

  const createIngredient = document.createElement('li')
  console.log(createIngredient);
  
  createIngredient.classList.add('item');

  createIngredient.textContent = option;

  return createIngredient
});

ingredientsList.append(...ingredientsItem)