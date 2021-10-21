const buttonDecrement= document.querySelector('button[data-action="decrement"]')
const buttonIncrement= document.querySelector('button[data-action="increment"]')
const valueRef = document.querySelector('#value');

let counterValue = 0; 

buttonDecrement.addEventListener("click", () => {
    counterValue -= 1;
    return (valueRef.textContent = counterValue)
})
buttonIncrement.addEventListener("click", () => {
    counterValue += 1;
    return (valueRef.textContent = counterValue)
})