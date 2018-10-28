const serverapi = require('./serverapi.js')


// This demonstrates the use of the stack and the queue in JavaScript.
// The "immediate" text is printed after the "inline" text because
// the Immediate object is queued, and JavaScript can't touch the queue
// until we're done with our code.
function inlineVsImmediate() {
    setImmediate(() => console.log("immediate"))
    console.log("inline")
}

inlineVsImmediate()
// Even this is printed before the "immediate"
console.log("After the call")

// A timeout is like an immediate, except the timeout
// doesn't enter the queue until after the set time (2000 ms in this case)
function inlineVsImmediateVsTimeout() {
    setTimeout(() => console.log("Timeout"), 2000)
    setImmediate(() => console.log("immediate"))
    console.log("inline")
}

inlineVsImmediateVsTimeout()

// Callback

let api = serverapi.callback

// This demonstrate the use of a callback. The second argument is the function
// that's needed to be called after the fetchPerson completes and returns a person.
// The function doesn't use an error handler, and so errors are not handled.
function printPerson(id) {
    api.fetchPerson(id, p => console.log(p))
}

// This is how you add an error handler (the 3rd argument).
function printPerson(id) {
    api.fetchPerson(id, p => console.log(p), err => console.log("Error: " + err))
}


// Callback Hell. When we need the result of one call in another, we end up with nested
// callback handlers and different places to handle the error.
function printEmployeeData(id) {
    api.fetchPerson(id, p => {
        api.fetchEmployee(p.employeeId, 
            e => console.log(e),
            err => console.log("Error: " + err))
    },
    err => console.log("Error: " + err))
}


// Promises

// DIY
// This is the way to turn a function with callbacks into a promise
const promise = new Promise((resolve, reject) => {
    api.fetchPerson(2, resolve, reject)
})

 
// Using promise-returning APIs
api = serverapi.promise


// api.fetchPerson(id) return a promise.
// Note how we can define callback functions using .then and error functions using .catch
function printPerson(id) {
    api.fetchPerson(id)
    .then(p => console.log(p))
    .catch(err => console.log("Error: " + err))
}

printPerson(1)
printPerson(2)
printPerson(219)


// Out of callback hell.
// The chained .then allow us to add callbacks without putting callbacks inside of other callbacks
// The .catch at the end allows us to handle both errors in the same place.
function printEmployeeData(id) {
    api.fetchPerson(id)
    .then(p => api.fetchEmployee(p.employeeId))
    .then(e => console.log(e))
    .catch(err => console.log("Error1: " + err))
}

printEmployeeData(1)
printEmployeeData(2)
printEmployeeData(219)

// Once we have control structures, though, the pattern breaks again and we need nested callbacks.
// At least, it's still only one error handler.
function printEmployeeDataSafe(id) {
    api.fetchPerson(id)
    .then(p => {
        if (p.employeeId) {
            return api.fetchEmployee(p.employeeId).then(e => console.log(e))
        }
    })
    .catch(err => console.log("Error1: " + err))
}

// Async/await
// async functions are a way of dealing with promises in a way that looks almost exactly like 
// inline code.
// The function below returns a Promise, beacuse it's async (the value of the promise will be undefined, though).
// Two places in the code calls functions that return a promise. We await both of these.
async function printEmployeeDataSafe(id) {
    try {
        const p = await api.fetchPerson(id)
        if (p.employeeId) {
            const e = await api.fetchEmployee(p.employeeId)
            console.log(e)
        }
    } catch(err) {
        console.log("Error: " + err)
    }
}

printEmployeeDataSafe(1)
printEmployeeDataSafe(2)
printEmployeeDataSafe(219)

// Note that all of the above are still working with promises. This line prints before any of the printEmployeeDataSafe do.
console.log("This is the end")
