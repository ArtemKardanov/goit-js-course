const input = document.getElementById('validation-input');
input.addEventListener('blur', handleClick);

function handleClick(e) {
    const inputWordLength = input.dataset.length;
    const valueLength = e.currentTarget.value.length

    if (valueLength != 0 && valueLength < +inputWordLength) {
        input.classList.add('invalid')
        input.classList.remove('valid')
    } else if (valueLength >= +inputWordLength) {
        input.classList.add('valid')
        input.classList.remove('invalid')
    } else if (valueLength == 0) {
        input.classList.remove('invalid')
        input.classList.remove('valid')
    }
};