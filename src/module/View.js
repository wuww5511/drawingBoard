import Editor from '@/lib/Editor'

export default class View {
  constructor (canvas) {
    this._cxt = canvas.getContext('2d')
    this._width = canvas.width
    this._height = canvas.height
    this._editor = Editor.getIns()
    this._editor.on('change', opts => {
      this.repaint()
    })
  }

  repaint () {
    this._cxt.clearRect(0, 0, this._width, this._height)
    this._editor.getData().each(ele => {
      ele.paint(this._cxt)
    })
  }

  getCxt () {
    return this._cxt
  }

}

View._ins = null

View.getIns = function (...args) {
  if (!this._ins) {
    this._ins = new View(...args)
  }
  return this._ins
}
