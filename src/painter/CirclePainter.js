import Painter from './Painter'
import Point from '@/module/Point'
import Line from '@/module/Line'
import Circle from '@/module/Circle'

export default class LinePainter extends Painter{
  constructor () {
    super()
    this._lastPoint = null
  }

  _mousemove (x, y, event) {
    if (this._lastPoint) {
      this._view.repaint()
      new Line({
        start: this._lastPoint,
        end: new Point(x, y)
      }).paint(this._cxt)
      this._lastCircle = new Circle({
        center: this._lastPoint,
        radius: Point.getDistance(this._lastPoint, new Point(x, y))
      })
      this._lastCircle.paint(this._cxt)
    }
  }

  _mousedown (x, y, event) {
    this._lastPoint = new Point(x, y)
  }

  _mouseup (x, y, event) {
    this._lastPoint = null
    if (this._lastCircle) {
      this._editor.add(this._lastCircle)
    }
    this._lastCircle = null
  }
}
