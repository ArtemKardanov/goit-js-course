const input = document.getElementById('name-input');
const output = document.getElementById('name-output')

input.addEventListener('input', handleInput)

function handleInput(e) {
    output.textContent = e.currentTarget.value;
    if (!e.currentTarget.value) output.textContent = 'незнакомец';
};