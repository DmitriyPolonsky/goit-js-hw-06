const inputTextSize = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');

const inputRange = () => {
    textSize.style.fontSize = `${inputTextSize.value}px`;
};
inputTextSize.addEventListener('input', inputRange);