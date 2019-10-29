function findBestEmployee(employees) {
    let bestEmployee = 0;
    let name;

    const allEmployees = Object.keys(employees)

    for (let employee of allEmployees) {

        if (bestEmployee < employees[employee]) {
            bestEmployee = employees[employee];
            name = employee;
        }
    }

    return name;
}

console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
); // lorence

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
); // mango

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
); // lux