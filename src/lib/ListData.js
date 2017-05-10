import EleData from './EleData'
import Ele from './Ele'

export default class ListData extends EleData {
  delete (id) {
    var res = false
    this.search(id, (ele, index) => {
      if (ele) {
        this._eles.splice(index, 1)
        res = true
      }
    })
    return res
  }

  add (data) {
    var ele = new Ele(data)
    this._eles.push(ele)
    return ele.getId()
  }

  search (id, callback) {
    for (let i = 0; i < this._eles.length; i++) {
      if (this._eles[i].getId() === id) {
        return callback(this._eles[i], index)
      }
    }
    return callback(null)
  }

  _initData () {
    return []
  }


}
