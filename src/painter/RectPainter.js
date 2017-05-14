import Painter from './Painter'
import Point from '@/module/Point'
import Rect from '@/module/Rect'

export default class RectPainter extends Painter{
  constructor () {
    super()
    this._lastPoint = null
  }

  _mousemove (x, y, event) {
    if (this._lastPoint) {
      this._lastRect = new Rect({
        start: this._lastPoint,
        end: new Point(x, y)
      })

      var lastRect = this._lastRect

      this._task.update(() => {
        this._view.repaint()
        lastRect.paint(this._cxt)
      })
    }
  }

  _mousedown (x, y, event) {
    this._lastPoint = new Point(x, y)
  }

  _mouseup (x, y, event) {
    this._lastPoint = null
    if (this._lastRect) {
      var lastRect = this._lastRect
      this._task.update(() => {
        this._editor.add(lastRect)
      })
    }
    this._lastRect = null
  }
}
