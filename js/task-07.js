const fontSizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const makeFontSize = (size) => textEl.style.fontSize = `${size.currentTarget.value}px`;

fontSizeControlEl.addEventListener('input', makeFontSize);