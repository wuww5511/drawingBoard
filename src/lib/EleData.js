import EventEmitter from 'events'

export default class EleData extends EventEmitter{
  constructor () {
    super()
    this._eles = this._initData()
  }

  // @abstract
  add (ele) {

  }

  // @abstract
  delete (id) {

  }

  // @abstract
  search (id, callback) {

  }

  // @abstract
  each (callback) {

  }

  update (id, data) {
    var res = false
    this.search(id, ele => {
      if (ele) {
        ele.update(data)
        this.emit('change', {
          action: 'update',
          ele
        })
        res = true
      }
    })
    return res
  }

  get (id) {
    var res
    this._search(id, ele => {
      res = ele
    })
    return res
  }

  getAll () {
    return this._eles
  }

  // @abstract
  _initData () {

  }

  // @abstract
  _add (data) {

  }
}
