export default class EleData {
  constructor () {
    this._eles = this._initData()
  }

  // @abstract
  add (data) {

  }

  // @abstract
  delete (id) {

  }

  // @abstract
  search (id, callback) {

  }

  update (id, data) {
    var res = false
    this.search(id, ele => {
      if (ele) {
        ele.update(data)
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
