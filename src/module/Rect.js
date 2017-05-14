import Ele from '@/lib/Ele'

export default class Rect extends Ele {
  paint (cxt) {
    var {start, end} = this._data
    cxt.save()
    cxt.beginPath()
    cxt.rect(start.x, start.y, end.x - start.x, end.y - start.y)
    cxt.stroke()
    cxt.restore()
  }
}
