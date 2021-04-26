const validationInputEl = document.querySelector('#validation-input');

const makeInputBlur = (number) => {
    
    if (number.currentTarget.value.length === Number(validationInputEl.dataset.length)) {
        validationInputEl.classList = 'valid';
    }else{validationInputEl.classList = 'invalid';}
};

validationInputEl.addEventListener('blur', makeInputBlur);