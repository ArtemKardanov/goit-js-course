function calculateEngravingPrice(message, pricePerWord) {
    let price = 0;

    const arrayFromMessage = message.split(' ');
    console.log(arrayFromMessage);

    price = arrayFromMessage.length * pricePerWord;
    return price;
}

console.log(
    calculateEngravingPrice(
        'Proin sociis natoque et magnis parturient montes mus',
        10,
    ),
); // 80

console.log(
    calculateEngravingPrice(
        'Proin sociis natoque et magnis parturient montes mus',
        20,
    ),
); // 160

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40)); // 200

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20)); // 100