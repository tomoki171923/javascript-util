'use strict'

/**
 * function :get the footer height.
 * @return {Nomber} the inner height of footer
 */
export function footer () {
  return $('footer').innerHeight()
}

/**
 * function :get the header height.
 * @return {Nomber} the inner height of header
 */
export function header () {
  return $('header').innerHeight()
}
