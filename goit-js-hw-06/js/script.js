import users from './users.js';

///////Задание 1
const getUserNames = users => {
    return users.map(user => {
        return user.name
    })
};

console.log(getUserNames(users));

///////Задание 2
const getUsersWithEyeColor = (users, color) => {
    return users.filter(user => {
        return user.eyeColor === color;
    })
};

console.log(getUsersWithEyeColor(users, 'blue'));

///////Задание 3
const getUsersWithGender = (users, gender) => {
    return users.filter(user => {
        return user.gender === gender;
    }).map(user => user.name)
};

console.log(getUsersWithGender(users, 'male'));

///////Задание 4
const getInactiveUsers = users => {
    return users.filter(user => {
        return !user.isActive
    })
};

console.log(getInactiveUsers(users));

///////Задание 5
const getUserWithEmail = (users, email) => {
    return users.find(user => user.email === email)
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

///////Задание 6
const getUsersWithAge = (users, min, max) => {
    return users.filter(user => {
        return user.age > min && user.age < max;
    })
};

console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));

///////Задание 7
const calculateTotalBalance = users => users.reduce((totalBalance, user) => totalBalance + user.balance, 0);

console.log(calculateTotalBalance(users));

///////Задание 8
const getUsersWithFriend = (users, friendName) => {
    return users.filter(user => {
        return user.friends.includes(friendName)
    }).map(user => user.name)
};

console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));

///////Задание 9

///////Задание 10