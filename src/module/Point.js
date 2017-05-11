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
