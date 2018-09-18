let point_prototype = {
    getX() { return this.x },
    getY() { return this.y },
    setX(_x) { this.x = _x },
    setY(_y) { this.y = _y }
}

function Point(x, y) {
    let p = Object.create(point_prototype)
    p.x = x
    p.y = y
    return p;
}

let p = Point(2, 3)

// Prototypal inheritance
function ColorPoint(x, y, color) {
    let cp = Object.create(Point(x, y))
    cp.color = color
    return cp
}

let cp = ColorPoint(2, 3, 'Brown')

console.log(Object.getPrototypeOf(p))
console.log(Object.getPrototypeOf(cp))
console.log(cp.getX())

// Concatinative inheritance
function Colored(o, color) {
    o.color = color
    return o
}

function ColoredPoint(x, y, color) {
    return Colored(Point(x, y), color)
}

function Translatable(o) {
    o.translate = () => { o.setY(o.getX()), o.setX(o.getY())  }
    return o
}

const TranslatablePoint = (x, y) => Translatable(Point(x, y))
