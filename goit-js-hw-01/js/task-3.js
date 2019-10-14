const ADMIN_PASSWORD = 'jqueryismyjam';

let message;

let form = prompt('Введите Ваш админский пароль')

if (form === null) {
    message = 'Отменено пользователем!';
} else if (form === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
} else {
    message = 'Доступ запрещен, неверный пароль!';
}

alert(message);