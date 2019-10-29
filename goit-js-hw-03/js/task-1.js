const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: 'true',
};

user.mood = 'happy';
user.hobby = 'Javascript';
user.premium = false;

let userInfo = Object.keys(user);

for (let key of userInfo) {
    console.log(`${key}: ${user[key]}`);

}