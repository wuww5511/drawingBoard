import Painter from './Painter'
import Point from '@/module/Point'
import Line from '@/module/Line'

export default class LinePainter extends Painter{
  constructor () {
    super()
    this._lastPoint = null
  }

  _mousemove (x, y, event) {
    if (this._lastPoint) {
      this._view.repaint()
      this._lastLine = new Line({
        start: this._lastPoint,
        end: new Point(x, y)
      })
      this._lastLine.paint(this._cxt)
    }
  }

  _mousedown (x, y, event) {
    this._lastPoint = new Point(x, y)
  }

  _mouseup (x, y, event) {
    this._lastPoint = null
    if (this._lastLine) {
      this._editor.add(this._lastLine)
    }
    this._lastLine = null
  }
}
