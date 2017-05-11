import Ele from '@/lib/Ele'
import Point from './Point'

export default class Line extends Ele {
  paint (cxt) {
    var {start, end, opts} = this._data
    cxt.save()
    cxt.beginPath()
    cxt.moveTo(start.x, start.y)
    cxt.lineTo(end.x, end.y)
    cxt.stroke()
    cxt.restore()
  }
}
