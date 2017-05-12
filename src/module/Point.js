export default class Point {
  constructor (x, y) {
    this.x = x
    this.y = y
  }

  isEqual ({x, y}) {
    if (this.x === x && this.y === y) {
      return true
    } else {
      return false
    }
  }
}

Point.isEqual = function (p1, p2) {
  return p1.x === p1.x && p2.y === p2.y
}

Point.getDistance = function (p1, p2) {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2))
}
