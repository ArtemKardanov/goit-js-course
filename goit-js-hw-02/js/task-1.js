function logItems(array) {
    let i = 0
    for (let item of array) {
        console.log(`${i += 1} - ${item}`);
    }
}
logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);