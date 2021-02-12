'use strict'

/**
 * remove the whitespace characters from the start and end of the string.
 * @param {String} str : string
 * @return {String} string
 */
export function trimSpace (str) {
  return str.trim()
}

/**
 * remove the target that is first found from the strig.
 * @param {String} str : string
 * @param {String} target : the target to remove
 * @return {String} string
 */
export function remove (str, target) {
  return str.replace(target, '')
}

/**
 * remove targets from the strig.
 * @param {String} str : string
 * @param {String} target : the target to remove
 * @return {String} string
 */
export function removeAll (str, target) {
  const regexp = new RegExp(target, 'g')
  return str.replace(regexp, '')
}

/**
 * replace fromTarget with toTarget in the string.
 * @param {String} str : string
 * @param {String} fromTarget : the target to be replaced
 * @param {String} toTarget : the target to replace
 * @return {String} string
 */
export function replace (str, fromTarget, toTarget) {
  const regexp = new RegExp(fromTarget, 'g')
  return str.replace(regexp, toTarget)
}
