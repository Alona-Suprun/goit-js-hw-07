// Добавляю html разметку
const link = document.querySelector('#link');
link.insertAdjacentHTML('afterend', '<ul id="categories"><li class="item"><h2>Животные</h2><ul><li>Кот</li><li>Хомяк</li><li>Лошадь</li><li>Попугай</li></ul></li><li class="item"><h2>Продукты</h2><ul><li>Хлеб</li><li>Петрушка</li><li>Творог</li></ul></li><li class="item"><h2>Технологии</h2><ul><li>HTML</li><li>CSS</li><li>JavaScript</li><li>React</li><li>Node</li></ul></li></ul>');
  
// считаю количество категорий
const categoriesEl = document.querySelector('#categories');
const categoriesItemEl = categoriesEl.querySelectorAll('li.item');
console.log(`В списке ${categoriesItemEl.length} категорий`);

// Заголовок и количество элементов
categoriesItemEl.forEach(item => {
    console.log(`Категория: ${item.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${item.lastElementChild.children.length}`);
});