const callback = {
    fetchPerson(id, callback, error) {
        switch(id) {
            case 1: 
                if (callback) setImmediate(() => callback({ id: 1, name: 'John Doe' }))
                break
            case 2: 
                if (callback) setImmediate(() => callback({ id: 2, name: 'Jane Doe', employeeId: 17 }))
                break
            case 3: 
                if (callback) setImmediate(() => callback({ id: 3, name: 'George Deer', employee: true, manager: false }))
                break
            case 4: 
                if (callback) setImmediate(() => callback({ id: 4, name: 'Jill Deer', employee: true, manager: true }))
                break
            default: 
                if (error) setImmediate(() => error('nope'))
        }
    },

    fetchEmployee(id, callback, error) {
        switch(id) {
            case 17: 
                if (callback) setImmediate(() => callback({ employeeId: 17, salary: 42000, manager: false}))
                break
            case 19: 
                if (callback) setImmediate(() => callback({ employeeId: 19, salary: 35000, manager: false }))
                break
            case 23: 
                if (callback) setImmediate(() => callback({ employeeId: 23, salary: 74000, manager: true }))
                break
            default: 
                if (error) setImmediate(() => error('nope'))
        }
    },

    fetchSubordinates(id, callback, error) {
        if (id === 4 && callback) 
            setImmediate(() => callback([2, 3]))
        else if (error)
            setImmediate(() => error('nope'))
    }

}

const createPromise = (callbackMethod) => (...args) => new Promise(
    (resolve, reject) => {
        const allArgs = [...args, resolve, reject]
        callbackMethod(...allArgs)
    }
)

const promise = {
    fetchPerson: createPromise(callback.fetchPerson),
    fetchEmployee: createPromise(callback.fetchEmployee),
    fetchAllSalaries: createPromise(callback.fetchAllSalaries),
    fetchEmployees: createPromise(callback.fetchAllSalaries)
}

module.exports = { callback, promise }