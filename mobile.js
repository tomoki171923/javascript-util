'use strict'

/**
 * function :whether user device is mobile or not
 * @return {boolean} true or false
 */
export function isMobile () {
  const regexp = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
  return window.navigator.userAgent.search(regexp) !== -1
}
