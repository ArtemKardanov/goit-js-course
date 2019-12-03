let counterValue = 0;

let value = document.getElementById('value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener('click', handleDecrementCounter)
incrementBtn.addEventListener('click', handleIncrementCounter)

function handleIncrementCounter() {
    counterValue += 1;
    value.textContent = counterValue;
};

function handleDecrementCounter() {
    counterValue -= 1;
    value.textContent = counterValue;
};