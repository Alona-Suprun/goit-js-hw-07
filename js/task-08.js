const inputEl = document.querySelector('input');
const boxesEl = document.querySelector('#boxes');
const buttonsEl = document.querySelectorAll('button');

let boxAmount = 0;

const randomNumber = () => Math.floor(Math.random() * 256);
const boxesColor = () =>
  `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;

const inputChange = () => (boxAmount = inputEl.value);

inputEl.addEventListener('change', inputChange);

const createBoxes = amount => {
  const size = 30;
  let boxesArray = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');

    box.style.backgroundColor = boxesColor();
    box.style.width = i * 10 + size + 'px';
    box.style.height = i * 10 + size + 'px';

    boxesArray.push(box);
  }
  boxesEl.append(...boxesArray);
};

const buttonRenderClick = () => createBoxes(boxAmount);

const buttonDestroyClick = () => (boxesEl.innerHTML = '');

buttonsEl[0].addEventListener('click', buttonRenderClick);
buttonsEl[1].addEventListener('click', buttonDestroyClick);
