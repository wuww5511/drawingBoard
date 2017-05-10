export default class ActionList {
  constructor () {
    this._done = []
    this._undone = []
  }

  add (action) {
    action.exec()
    this._done.push(action)
    this._undone = []
  }

  undo () {
    var action = this._done.pop()
    if (action) {
      action.undo()
      this._undone.push(action)
    }
  }

  redo () {
    var action = this._undone.pop()
    if (action) {
      action.exec()
      this._done.push(action)
    }
  }
}
