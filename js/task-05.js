const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const nameValue = (event) => {
    outputEl.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
        outputEl.textContent = 'Anonymous'
    };
    outputEl.textContent = event.currentTarget.value;
};
 
inputEl.addEventListener('input', nameValue);