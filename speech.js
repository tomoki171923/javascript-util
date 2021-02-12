'use strict'
/*
  class : this class to pronounce US English using Web Speech API.
  reference : https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
*/

export class Speech {
  constructor () {
    this.u = new SpeechSynthesisUtterance()
    this.u.lang = 'en-US'
  }

  speak (word) {
    this.u.text = word
    speechSynthesis.speak(this.u)
  }

  /**
   * whether it is currently in the process of being spoken or not.
   * @return {boolean} true or false
   */
  isSpeaking () {
    return speechSynthesis.speaking
  }
}
