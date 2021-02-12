'use strict'

/*
Function:
    wait the processing until the condition you can break.
Argument:
    condition:
      [Object:function] the condition you can break.
    bool:
      [Object:boolean] true/false
Return:
    [Object:promise]
*/

/* 
How to use:
    e.g.
    import * as wait from "./wait";

    function isTrue() {
      // your condition
    }
    async function myFunction() {
      await wait.until(isTrue);
    }
    myFunction();
*/

export function until (condition, bool) {
  const action = function (resolve) {
    if (condition() === bool) {
      // done
      resolve()
    } else {
      // waiting
      setTimeout(_ => action(resolve), 200)
    }
  }
  return new Promise(action)
}
