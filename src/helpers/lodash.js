export default {
  /**
   * @param {Object} object
   * @param {Array} keys
   */
  pick: (object, keys) => {
    return keys.reduce((obj, key) => {
      if (object && object.hasOwnProperty(key)) {
        obj[key] = object[key]
      }
      return obj
    }, {})
  },
  get: (obj, path, defaultValue) => {
    const travel = regexp =>
      String.prototype.split
        .call(path, regexp)
        .filter(Boolean)
        .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj)
    const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/)
    return result === undefined || result === obj ? defaultValue : result
  },
}
