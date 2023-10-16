// object methods
let emp = {
    id:101,
    name: 'Ritik',
    age: 24
};

let keys = Object.keys(emp);
console.log(keys);

let values = Object.values(emp);
console.log(values);

const entries = Object.entries(emp);
console.log(entries);

emp.id = 100;
console.log(emp);


// can't add and remove object.
// Object.freeze(emp);

// Object.seal(emp);
