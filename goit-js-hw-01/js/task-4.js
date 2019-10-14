let credits = 23580;

const pricePerDroid = 3000;

let howManyDroidsToBuy = prompt('Какое количество дроидов хотите приобрести?', '');

let totalPrice;

let remainCredits;

if (howManyDroidsToBuy === null) {
    alert('Отменено пользователем!');
} else {
    howManyDroidsToBuy = Number(howManyDroidsToBuy);
    totalPrice = pricePerDroid * howManyDroidsToBuy;
    if (totalPrice > credits) {
        alert('Недостаточно средств на счету!')
    } else {
        remainCredits = credits - totalPrice;
        alert(`Вы купили ${howManyDroidsToBuy} дроидов, на счету осталось ${remainCredits} кредитов.`)
    }
}