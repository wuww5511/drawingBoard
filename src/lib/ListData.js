import EleData from './EleData'
import Ele from './Ele'

export default class ListData extends EleData {
  delete (id) {
    var res = false
    this.search(id, (ele, index) => {
      if (ele) {
        this._eles.splice(index, 1)
        res = true
        this.emit('change', {
          action: 'delete',
          ele
        })
      }
    })
    return res
  }

  add (ele) {
    this._eles.push(ele)
    this.emit('change', {
      action: 'add',
      ele
    })
    return ele.getId()
  }

  search (id, callback) {
    for (let i = 0; i < this._eles.length; i++) {
      if (this._eles[i].getId() === id) {
        return callback(this._eles[i], i)
      }
    }
    return callback(null)
  }

  each (callback) {
    for (let i = 0; i < this._eles.length; i++) {
      callback(this._eles[i])
    }
  }

  _initData () {
    return []
  }


}
