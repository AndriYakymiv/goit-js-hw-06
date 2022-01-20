const allElementItem = document.querySelectorAll('.item');

console.log(`Number of categories: ${allElementItem.length}`);


allElementItem.forEach(element => {

  const categoriesEl = element.querySelector('h2');

  const lengthCategoriesEl = element.querySelectorAll('li')

  console.log(`Category: ${categoriesEl.textContent}`);
  console.log(`Elements: ${lengthCategoriesEl.length}`);
});