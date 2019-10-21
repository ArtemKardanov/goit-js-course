let input;
const numbers = [];
let total = 0;

while (true) {
    input = prompt('Введите любое число:')

    if (input === null) {
        break;
    }

    input = Number(input);
    numbers.push(input);
}

for (const number of numbers) {
    total += number;
}


console.log(`Общая сумма чисел равна ${total}`);