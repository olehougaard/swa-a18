let a = [ 1, 2, 3, 7, 19, 3, 4, -11 ]

function addTenPercent(a) {
    let result = []
    for(let i = 0; i < a.length; i++) {
        result.push(a[i] * 1.1)
    }
    return result
}

console.log(a.map(x => x * 1.1))

function evenNumbers(a) {
    let result = []
    for(let i = 0; i < a.length; i++) {
        if (a[i] % 2 === 0) 
            result.push(a[i])
    }
    return result
}

console.log(a.filter(x => x % 2 === 0))

function sum(a) {
    let result = 0
    for(let i = 0; i < a.length; i++) {
        result = result + a[i]
    }
    return result
}

function product(a) {
    let result = 1
    for(let i = 0; i < a.length; i++) {
        result = result * a[i]
    }
    return result
}

console.log(a.reduce((x, y) => x + y, 0))
console.log(a.reduce((x, y) => x * y, 1))

// Currying
// Not curried:
function add(x, y) { return x + y }

// Curried:
function addC(x) {
    return function(y) { return x + y }
}

// Calling not curried:
console.log(add(2, 4)) // 6

// Calling curried
console.log(addC(2)(4)) // 6

const add2 = addC(2) // Partial application
console.log(add2(4)) // 6

// Using partial application in higer-order functions
console.log(a.map(add2)) // [ 3, 4, 5, 9, 21, 5, 6, -9 ]
console.log(a.map(addC(2))) // [ 3, 4, 5, 9, 21, 5, 6, -9 ]

// Alternative to currying is anonymous function
console.log(a.map(y => add(2, y))) // [ 3, 4, 5, 9, 21, 5, 6, -9 ]
console.log(a.map(y => 2 + y)) // [ 3, 4, 5, 9, 21, 5, 6, -9 ]

// Using bind for partial application
const boundAdd = add.bind(null, 2)
console.log(a.map(boundAdd)) // [ 3, 4, 5, 9, 21, 5, 6, -9 ]
