
    const input = document.querySelector('#validation-input');

    input.addEventListener('blur', onInputBlur);

function onInputBlur() {
        
    const inputValueLength = input.value.trim().length;
    const dataLength = Number(input.dataset.length);


    if (dataLength === inputValueLength) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}