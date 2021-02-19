'use strict'

/** 
 * set an event of Loading image delayed.
 * @param {Element} beforeImgElement Image Element object to remove.
 * @param {String} afterImgPath Image path to render.
 */
export function setDelayImgRender (beforeImgElement, afterImgPath) {
  const ImgObj = new Image()
  ImgObj.onload = function () {
    beforeImgElement.src = afterImgPath
  }
  ImgObj.src = afterImgPath
}
