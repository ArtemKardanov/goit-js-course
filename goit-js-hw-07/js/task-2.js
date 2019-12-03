const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ingredientsItem = ingredients.map(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;

    return li
});

let ingredientsList = document.getElementById('ingredients');
ingredientsList.append(...ingredientsItem)