export default class Ele {
  constructor (data = {}) {
    this._id = `ele_${+new Date()}`
    this._data = data
  }

  get () {
    return this._data
  }

  getId () {
    return this._id
  }

  update (data) {
    Object.assign(this._data, data)
  }

  // @abstract
  paint (cxt) {

  }
}
