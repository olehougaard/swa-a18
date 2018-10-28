const express = require('express')

const app = express()

app.use(express.static('static'))

const persons = {
    '1': { id: 1, name: 'John Doe' },
    '2': { id: 2, name: 'Jane Doe', employeeId: 17 },
    '3': { id: 3, name: 'George Deer', employeeId: 19 },
    '4': { id: 4, name: 'Jill Deer', employeeId: 23 },
}

employees = {
    '17': { employeeId: 17, salary: 42000, manager: false },
    '19': { employeeId: 19, salary: 35000, manager: false },
    '23': { employeeId: 23, salary: 74000, manager: true },
}

subordinates = {
    '23': [ 17, 19 ]
}

app.get('/persons', (req, res) => {
    res.send(JSON.stringify(Object.values(persons)))
})

app.get('/persons/:id', (req, res) => {
    const id = req.params.id
    if (persons[id])
        res.send(JSON.stringify(persons[id]))
    else {
        res.status(404)
        res.send()
    }
})

app.get('/employees', (req, res) => {
    res.send(Object.values(employees))
})

app.get('/employees/:id', (req, res) => {
    const id = req.params.id
    if (employees[id])
        res.send(JSON.stringify(employees[id]))
    else {
        res.status(404)
        res.send()
    }
})

app.get('/employees/:id/subordinates', (req, res) => {
    const id = req.params.id
    if (employees[id] && employees[id].manager)
        res.send(JSON.stringify(subordinates[id] || []))
    else {
        res.status(404)
        res.send()
    }
})

app.listen(8080, () => console.log("Server is listening on 8080"))
