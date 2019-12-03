const categoryItems = document.querySelectorAll('.item');
console.log(`В списке ${categoryItems.length} категории`);

categoryItems.forEach(item => console.log(`Категория: ${item.querySelector('h2').textContent}, количество элементов: ${item.lastElementChild.children.length}`));