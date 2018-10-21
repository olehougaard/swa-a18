const callback = {
    fetchPerson(id, callback, error) {
        switch(id) {
            case 1: 
                if (callback) callback({ id: 1, name: 'John Doe', employee: false })
                break
            case 2: 
                if (callback) callback({ id: 2, name: 'Jane Doe', employee: true, manager: false })
                break
            case 3: 
                if (callback) callback({ id: 3, name: 'George Deer', employee: true, manager: false })
                break
            case 4: 
                if (callback) callback({ id: 4, name: 'Jill Deer', employee: true, manager: true })
                break
            default: 
                if (error) error('nope')
        }
    },

    fetchSalary(id, callback, error) {
        switch(id) {
            case 2: 
                if (callback) callback(42000)
                break
            case 3: 
                if (callback) callback(35000)
                break
            case 4: 
                if (callback) callback(74000)
                break
            default: 
                if (error) error('nope')
        }
    },

    fetchAllSalaries(callback) {
        if (callback)
            callback({
                '2': 42000,
                '3': 35000,
                '4': 74000
            })
    },

    fetchEmployees(id, callback, error) {
        if (id === 4 && callback) 
            callback([2, 3])
        else if (error)
            error('nope')
    }

}

const promise = {
    fetchPerson(id) {
        switch(id) {
            case 1: return Promise.resolve({ id: 1, name: 'John Doe', employee: false })
            case 2: return Promise.resolve({ id: 2, name: 'Jane Doe', employee: true, manager: false })
            case 3: return Promise.resolve({ id: 3, name: 'George Deer', employee: true, manager: false })
            case 4: return Promise.resolve({ id: 4, name: 'Jill Deer', employee: true, manager: true })
            default: return Promise.reject('nope')
        }
    },

    fetchSalary(id) {
        switch(id) {
            case 2: return Promise.resolve(42000)
            case 3: return Promise.resolve(35000)
            case 4: return Promise.resolve(74000)
        default: return Promise.reject('nope')
        }
    },

    fetchAllSalaries() {
        return Promise.resolve({
            '2': 42000,
            '3': 35000,
            '4': 74000
        })
    },

    fetchEmployees(id) {
        if (id === 4) return Promise.resolve([2, 3])
        return Promise.reject('nope')
    }
}

module.exports = { callback, promise }