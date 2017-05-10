import ActionList from './ActionList'
import Ele from './Ele'
import ListData from './ListData'
import Action from './Action'

export default class Editor {
  constructor () {
    this._actionList = new ActionList()
    this._data = new ListData()
  }

  add (data) {
    var action = new Action({
      onexec: data => {
        data.id = this._data.add(data)
      },
      onundo: data => {
        this._data.delete(data.id)
      }
    })

    this._actionList.add(action)

    return action.getData().id
  }

  delete (id) {
    var action = new Action({
      data: {
        id,
        ele: this._data.get(id)
      },
      onexec: data => {
        this._data.delete(data.id)
      },
      onundo: data => {
        data.id = this._data.add(data)
      }
    })

    this._actionList.add(action)
  }

  update (id, data) {
    var action = new Action({
      data: {
        id,
        preData: this._data.get(id),
        data
      },
      onexec: data => {
        this._data.update(data.id, data.data)
      },
      onundo: data => {
        this._data.update(data.id, data.preData)
      }
    })

    this._actionList.add(action)
  }

  getData () {
    return this._data
  }

  undo () {
    this._actionList.undo()
  }

  redo () {
    this._actionList.redo()
  }
}

Editor._ins = null

Editor.getIns = function () {
  if (!this._ins) {
    this._ins = new Editor()
  }
  return this._ins
}

