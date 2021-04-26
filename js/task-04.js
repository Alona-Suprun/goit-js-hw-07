const valueEl = document.querySelector('#value');
let counterValue = 0;
const buttonsEl = document.querySelectorAll('#counter button');
const incrementBtn = buttonsEl[1];
const decrementBtn = buttonsEl[0];

const increment = () => valueEl.textContent = counterValue += 1;
const decrement = () => valueEl.textContent = counterValue -= 1;

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);