let obj = {id:101, name: "Ritik", salary: 100000};

let emp = new Object();
emp.id = 102;
emp.name = "sam";
console.log(emp);
console.log(obj);

function Emp(i, n, s) {
    this.id = i;
    this.name = n;
    this.salary = s;
}

const e = new Emp(103, "Amy", 120000);
console.log(e);

console.log(emp.id);
console.log(emp[`name`]);

emp.salary = 130000;

delete emp.salary;
console.log(emp);


