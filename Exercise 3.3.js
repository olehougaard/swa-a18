function named(o, name) {
    o.getName = () => name
    o.setName = (_name) => { name = _name }
    return o
}

function aged(o, age) {
    o.getAge = () => age
    o.setAge = (_age) => { age = _age}
    return o
}

function salaried(o, salary) {
    o.getSalary = () => salary
    o.setSalary = (_salary) => { salary = _salary }
    return o
}

function Person(name, age) {
    let p = {}
    p = named(p, name)
    p = aged(p, age)
    p.toString = () => p.getName() + ", " + p.getAge()
    return p
}

function Employee(name, age, salary) {
    let e = Person(name, age)
    e = salaried(e, salary)
    e.toString() = e.getName() + ", " + e.getAge() + ", " + e.getSalary()
    return e
}