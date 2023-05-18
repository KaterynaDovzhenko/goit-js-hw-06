
    const input = document.querySelector('#validation-input');
    // const validColor = document.querySelector('#validation-input');
    // const invalidColor = document.querySelector('.invalid');

    input.addEventListener('blur', onInputBlur);

function onInputBlur() {
        
    const inputValueLength = input.value.trim().length;
    const dataLength = +(input.dataset.length);


    if (dataLength === inputValueLength) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}