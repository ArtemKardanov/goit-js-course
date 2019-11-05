////////////////============== 1 МЕТОД


// const inventory = {
//     items: ['Монорельса', 'Фильтр'],
//     add(itemName) {
//         console.log(`Adding ${itemName} to inventory`);

//         this.items.push(itemName);
//     },
//     remove(itemName) {
//         console.log(`Removing ${itemName} from inventory`);

//         this.items = this.items.filter(item => item !== itemName);
//     },
// };

// const invokeInventoryAction = function (itemName, action) {
//     console.log(`Invoking action on ${itemName}`);
//     action.call(inventory, itemName); // ДОБАВИЛ МЕТОД ФУНКЦИИ "call" для того чтобы передать контекст объекта inventory
// };

// invokeInventoryAction('Аптечка', inventory.add);
// // Invoking action on Аптечка
// // Adding Аптечка to inventory

// console.log(inventory.items); // ['Монорельса', 'Фильтр', 'Аптечка']

// invokeInventoryAction('Фильтр', inventory.remove);
// // Invoking action on Фильтр
// // Removing Фильтр from inventory

// console.log(inventory.items); // ['Монорельса', 'Аптечка']





/////////////////////================== 2 МЕТОД забайндил и вызвал к в контексте объекта "inventory"


// function add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
// };

// function remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter(item => item !== itemName);
// };

// const inventory = {
//     items: ['Монорельса', 'Фильтр'],
// };

// const addFunction = add.bind(inventory)
// const removeFunction = remove.bind(inventory)

// inventory.add = addFunction;
// inventory.remove = removeFunction;

// const invokeInventoryAction = function (itemName, action) {
//     console.log(`Invoking action on ${itemName}`);
//     action(itemName);
// };

// invokeInventoryAction('Аптечка', inventory.add);
// // Invoking action on Аптечка
// // Adding Аптечка to inventory

// console.log(inventory.items); // ['Монорельса', 'Фильтр', 'Аптечка']

// invokeInventoryAction('Фильтр', inventory.remove);
// // Invoking action on Фильтр
// // Removing Фильтр from inventory

// console.log(inventory.items); // ['Монорельса', 'Аптечка']


////////////////// 3 METOD

const inventory = {
    items: ['Монорельса', 'Фильтр'],
    add(itemName) {
        console.log(`Adding ${itemName} to inventory`);

        this.items.push(itemName);
    },
    remove(itemName) {
        console.log(`Removing ${itemName} from inventory`);

        this.items = this.items.filter(item => item !== itemName);
    },
};

const invokeInventoryAction = function (itemName, action) {
    console.log(`Invoking action on ${itemName}`);
    action(itemName);
};

invokeInventoryAction('Аптечка', inventory.add.bind(inventory)); // ADD BIND
// Invoking action on Аптечка
// Adding Аптечка to inventory

console.log(inventory.items); // ['Монорельса', 'Фильтр', 'Аптечка']

invokeInventoryAction('Фильтр', inventory.remove.bind(inventory)); // ADD BIND
// Invoking action on Фильтр
// Removing Фильтр from inventory

console.log(inventory.items); // ['Монорельса', 'Аптечка']