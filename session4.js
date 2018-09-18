function Point(x, y) {
    this.x = x
    this.y = y
}

Point.prototype = {
    getX() { return this.x },
    getY() { return this.y },
    setX(_x) { this.x = _x },
    setY(_y) { this.y = _y }
}

function createPoint(x, y) {
    let p = Object.create(Point.prototype)
    Point.call(p, x, y)
    p.constructor = Point
    return p;
}

let p = new Point(2, 3)
console.log(Object.getPrototypeOf(p) === Point.prototype)

function ColorPoint(x, y, color) {
    Point.call(this, x, y) // NOT: Point(x, y)
    this.getColor = () => color
}

ColorPoint.prototype = {
//    getColor() { return this.color }
}
Object.setPrototypeOf(ColorPoint.prototype, Point.prototype)



// Prototypal inheritance
function createColorPoint(x, y, color) {
    let cp = Object.create(ColorPoint.prototype)
    ColorPoint.call(cp, x, y, color)
    cp.constructor = ColorPoint
    return cp
}

const cp = new ColorPoint(5, 10, 'Red')
console.log(cp instanceof Point)
