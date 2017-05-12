import Ele from '@/lib/Ele'

export default class Circle extends Ele {
  paint (cxt) {
    var {center, radius} = this._data
    cxt.save()
    cxt.beginPath()
    cxt.arc(center.x, center.y, radius, 0, 360 * Math.PI / 180)
    cxt.stroke()
    cxt.restore()
  }
}
