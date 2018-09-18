class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    getX() { return this.x }
    getY() { return this.y }
    setX(_x) { this.x = _x }
    setY(_y) { this.y = _y }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y)
        this.color = color
    }

    getColor() { return color }
}

