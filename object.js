'use strict'

/**
 * function :whether the object is null or not
 * @param {Object} data (require): Object
 * @return {boolean} true or false
 */
export function isNull (data) {
  if (typeof data == 'string' && !data.trim()) {
    data = null
  }
  if (data == null || data == undefined) {
    return true
  } else {
    return false
  }
}

/**
 * function : return the type of the object
 * @param {Object} obj (require): Object
 * @return {String} the type of the object
 */
export function getObjecyType (obj) {
  return Object.prototype.toString.call(obj)
}
