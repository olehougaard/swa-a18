/*function names(persons) {
    let ns = []
    for(let i = 0; i < persons.length; i++) {
      ns.push(person[i].name)
    }
    return ns
  }
*/

const names = persons => persons.map(p => p.name)

/*
  function adults(persons) {
    let as = []
    for(let i = 0; i < persons.length; i++) {
      if (persons[i].age >= 18) {
        as.push(persons[i])
      }
    }
    return as
  }
*/

const adults = persons => persons.filter(p => p.age >= 18)

/*
  function oldest_person(persons) {
    let oldest = null
    for(let i = 0; i < persons.length; i++) {
      if (!oldest || persons[i].age > oldest.age) {
        oldest = person[i]
      }
    }
    return oldest
  }
*/   

const oldest_person = persons => persons.reduce((oldest, p) => (!oldest || p.age > oldest.age) ? p : oldest, null)

/*
  function total_salaries_of_seniors(employees) {
    let total = 0
    for(let i = 0; i < employees.length; i++) {
      if (employees[i].age >= 60) {
        total += employees[i].salary
      }
    }
    return total
  }  
*/

const total_salaries_of_seniors = employees => employees.
                                                 filter(p => p.age >= 60).
                                                 map(p => p.salary).
                                                 reduce((t, s) => t + s, 0)
