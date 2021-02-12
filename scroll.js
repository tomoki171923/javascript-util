'use strict'

/**
 * scroll to element.
 * @param {Element} element Element object
 * @param {Number} headerHeight header height
 */
export function toElement (element, headerHeight) {
  const position = $(element).offset().top - headerHeight
  $('html, body').animate({ scrollTop: position })
}

/**
 * scroll to pixel.
 * @param {Number} headerHeight header height
 */
export function toPixel (element) {
  const position = $(element).offset().top - headerHeight
  $('html, body').animate({ scrollTop: position })
}

/**
 * scroll to the top.
 */
export function toTop () {
  $('html, body').animate({ scrollTop: 0 })
}
