function Person(name, age) {
    this.name = name
    this.age = age || 0
}

Person.prototype = {
    getName() { return this.name },
    setName(_name) { this.name = _name },
    getAge() { return this.age },
    setAge(_age) { this.age = _age },
    toString() { return "name = " + this.name + ", " + this.age },
    equals(o) { return this.name === o.name && this.age === o.age }
}

function Employee(name, age, salary) {
    if (arguments.length < 3) {
        Person.call(this, arguments[0])
        this.salary = arguments[1]
    } else {
        Person.call(this, name, age)
        this.salary = salary
    }
}

Employee.prototype = {
    getSalary() { return this.salary },
    toString() { return "name = " + this.name + ", " + this.age + ", " + this.salary},
    equals(o) { return Person.prototype.equals.call(this, o) && this.salary === o.salary }
}
Object.setPrototypeOf(Employee.prototype, Person.prototype)

/* With object desctructoring:
function Employee({name, age, salary}) {
    Person.call(this, name, age)
    this.salary = salary
}

let e = new Employee({ name: 'John', salary: 10000})
*/
