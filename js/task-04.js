
    const decrementBtn = document.querySelector('button[data-action="decrement"]');
    const counterValue = decrementBtn.nextElementSibling;
    const incrementBtn = counterValue.nextElementSibling;
    
    decrementBtn.addEventListener('click', () => {
        counterValue.textContent -= 1;
    });
    incrementBtn.addEventListener('click', () => {
        counterValue.textContent++;
    });
