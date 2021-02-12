'use strict'

/**
 * change DOM element to jQuery object
 * @return {jQuery} jQuery object
 */
export function toJquery (dom) {
  let jqueryObj = $(dom)
  return jqueryObj
}
