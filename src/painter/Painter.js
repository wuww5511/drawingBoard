import Editor from '@/lib/Editor'
import View from '@/module/View'

export default class Painter {
  constructor () {
    this._view = View.getIns()
    this._cxt = this._view.getCxt()
    this._editor = Editor.getIns()
  }

  onCanvasEvent ({x, y, type, event}) {
    var action = `_${type}`
    if (this[action]) {
      this[action](x, y, event)
    }
  }
}
