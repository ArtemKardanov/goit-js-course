const products = [{
        name: 'Радар',
        price: 1300,
        quantity: 4,
    },
    {
        name: 'Сканер',
        price: 2700,
        quantity: 3,
    },
    {
        name: 'Дроид',
        price: 400,
        quantity: 7,
    },
    {
        name: 'Захват',
        price: 1200,
        quantity: 2,
    },
];

function calculateTotalPrice(arr, productName) {
    let totalPrice = 0;

    for (let obj of arr) {

        const valuesMassive = Object.values(obj); // ПЕРЕДАЛ ЗНАЧЕНИЕ В ПЕРЕМЕННУЮ
        console.log(Object.values(obj));

        if (valuesMassive.includes(productName)) {
            totalPrice = obj['price'] * obj['quantity'];

            break // ДОБАВИЛ 'BREAK'
        }
    }

    return totalPrice;
}

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800