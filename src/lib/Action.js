export default class Action {

  /**
   *  @param opts {Object}
   *    - data {Object}
   *    - onexec {Function}
   *    - onundo {Function}
   */
  constructor (opts = {}) {
    this._data = opts.data || {}
    this._exec = opts.onexec || function () {}
    this._undo = opts.onundo || function () {}
  }

  exec () {
    this._exec(this._data)
  }

  undo () {
    this._undo(this._data)
  }

  getData () {
    return this._data
  }
}
