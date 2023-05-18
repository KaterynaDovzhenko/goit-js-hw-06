const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
     
inputEl.addEventListener('input', fontSizeText);
    
    
function fontSizeText({ currentTarget }) {
    textEl.style.fontSize = `${currentTarget.value}px`,
    console.log(textEl.style.fontSize )
};
    


// function fontSizeText(event) {
//     textEl.style.fontSize = event.currentTarget.value + `px`;
//     console.log(event.currentTarget.value)
// }





