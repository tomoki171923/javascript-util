'use strict'

export class Query {
  constructor () {
    let uri = window.location.search.substring(1)
    this.params = new URLSearchParams(uri)
  }

  /**
   * get query parameter form your keyword.
   * @param {String} keyword : string
   * @return {String} string
   */
  param (keyword) {
    return this.params.get(keyword)
  }
}
