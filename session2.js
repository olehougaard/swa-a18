let a = [1, 2, 3, 5, 8]

console.log(a[5])

let sum = 0
for(let i = 0; i < a.length; i++) sum += a[i]

console.log(sum)

a[8] = 55

console.log(a.length)

sum = 0
for(let i in a) sum += a[i]
console.log(sum)

sum = 0
a.forEach(i => { sum += i })

console.log(sum)

sum = a.reduce((a, b) => a + b, 0)

console.log(sum)

// Object
let name = {
    first: 'John',
    last: 'Doe',
    fullName: function() { return this.first + ' ' + this.last }
}

console.log(name.fullName())

// Closures
//const h = f => x => f(x, x)
function h(f) {
    function inner(x) {
        return f(x, x)
    }
    return inner
}

function add(x, y) {
    return x + y
}

function mul(x, y) {
    return x * y
}

let h_add = h(add)
let h_mul = h(mul)

console.log(h_add(3))
console.log(h_mul(3))

function seq(first) {
    let next = first
    return () => next++
}

let s = seq(1)
console.log(s())
console.log(s())
console.log(s())

console.log()

// Factory function
function seqObj(first) {
    let next = first
    return {
        getNext: () => next++
    }
}

function SeqConst(first) {
    let next = first
    this.getNext = () => next++
    this.setNext = (n) => { next = n }
    this.next = function(n) {
        if (n !== undefined) {
            next = n
        } else {
            return n
        }
    }
}

let s1 = new SeqConst(2)
console.log(s1.getNext())
s1.next = 1
console.log(s1.getNext())
console.log(s1.getNext())
console.log(s1)
