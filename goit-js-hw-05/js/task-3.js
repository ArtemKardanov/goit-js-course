class Storage {
    constructor(items) {
        this.items = items
    }

    getItems() {
        return this.items
    }

    addItem(item) {
        this.items.push(item)
    }

    removeItem(item) {
        for (let i = 0; i < this.items.length; i += 1) {
            if (item === this.items[i]) {
                this.items.splice(i, 1)
            }
        }
    }
}


const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
]);

console.log(storage);

console.table(storage.getItems())

storage.addItem('Дроид');
console.log(storage.items);

storage.removeItem('Пролонгер');

console.log(storage.items);