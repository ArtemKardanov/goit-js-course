let deliveryCountry = prompt('Укажите страну доставки: ', '');

let price;

if (deliveryCountry === null) {
    alert('Отмена');
} else {
    switch (deliveryCountry, deliveryCountry.toUpperCase(), deliveryCountry.toLowerCase()) {
        case 'китай':
            price = 100;
            alert(`Доставка в ${deliveryCountry} будет стоить ${price} кредитов`);
            break;

        case 'чили':
            price = 250;
            alert(`Доставка в ${deliveryCountry} будет стоить ${price} кредитов`);
            break;

        case 'австралия':
            price = 170;
            alert(`Доставка в ${deliveryCountry} будет стоить ${price} кредитов`);
            break;

        case 'индия':
            price = 80;
            alert(`Доставка в ${deliveryCountry} будет стоить ${price} кредитов`);
            break;

        case 'ямайка':
            price = 120;
            alert(`Доставка в ${deliveryCountry} будет стоить ${price} кредитов`);
            break;

        default:
            alert('В вашей стране доставка не доступна');
    }
}