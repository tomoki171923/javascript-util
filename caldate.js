'use strict'

/*
  class : this class has some functions to calculate date.
*/
export class Caldate {
  constructor () {
    this.nowDate = new Date()
  }

  // this method to return left days from today to targetDate
  getLeftDays (targetDate) {
    // Calculate left days to Target Date
    let dnumNow = this.nowDate.getTime()
    let dnumTarget = targetDate.getTime()
    let diffMSec = dnumTarget - dnumNow
    let diffDays = diffMSec / (1000 * 60 * 60 * 24)
    let leftDays = Math.ceil(diffDays)
    // return
    return leftDays.toString()
  }

  // this method to return the week number of the mounth
  getThisWeekNum (targetDate) {
    let weeknum = Math.floor(
      (targetDate.getDate() - targetDate.getDay() + 12) / 7
    )
    return weeknum
  }
}
