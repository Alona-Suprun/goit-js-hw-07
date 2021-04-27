const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

const makeName = name => {
  if (nameInputEl.value === '') {
    return (nameOutputEl.textContent = 'незнакомец');
  }
  nameOutputEl.textContent = name.currentTarget.value;
};

nameInputEl.addEventListener('input', makeName);
