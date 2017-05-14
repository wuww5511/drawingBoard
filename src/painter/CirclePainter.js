import Painter from './Painter'
import Point from '@/module/Point'
import Line from '@/module/Line'
import Circle from '@/module/Circle'
import frameloop from '@/instance/frameLoop'

export default class LinePainter extends Painter{
  constructor () {
    super()
    this._lastPoint = null
  }

  _mousemove (x, y, event) {
    if (this._lastPoint) {
      var newLine = new Line({
        start: this._lastPoint,
        end: new Point(x, y)
      })

      var lastCircle = new Circle({
        center: this._lastPoint,
        radius: Point.getDistance(this._lastPoint, new Point(x, y))
      })

      this._lastCircle = lastCircle

      this._task.update(() => {
        this._view.repaint()
        newLine.paint(this._cxt)
        lastCircle.paint(this._cxt)
      })

    }
  }

  _mousedown (x, y, event) {
    this._lastPoint = new Point(x, y)
  }

  _mouseup (x, y, event) {
    this._lastPoint = null
    if (this._lastCircle) {
      var lastCircle = this._lastCircle
      this._task.update(() => {
        this._editor.add(lastCircle)
      })
    }
    this._lastCircle = null
  }
}
