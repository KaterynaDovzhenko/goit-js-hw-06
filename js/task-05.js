const refs = {
    input: document.querySelector('#name-input'),
    nameSpan: document.querySelector('#name-output')
};

refs.input.addEventListener('input', (event) => {
    if (event.currentTarget.value === '') {
        return refs.nameSpan.textContent = 'Anonymous';
    }
    return refs.nameSpan.textContent = event.currentTarget.value;
});

