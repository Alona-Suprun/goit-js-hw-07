// Добавляю html разметку
const link = document.querySelector('#link');
link.insertAdjacentHTML('afterend', '<ul id="ingredients"></ul>');

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients');

// Создание и вставка ли
const products = ingredients.map(item => {
    const itemEl = document.createElement("li");
    itemEl.textContent = item;
    return itemEl;
});

ingredientsEl.append(...products)
