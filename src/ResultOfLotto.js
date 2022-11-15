const MissionUtils = require("@woowacourse/mission-utils");

class ResultOfLotto {

  constructor(purchasedNumbers, winningNumber, bonusNumber) {
    this.purchasedNumbers = purchasedNumbers
    this.winningNumber = winningNumber
    this.bonusNumber = bonusNumber

    this.result = {
      3: 0,
      4: 0,
      5: [0, 0],
      6: 0,
    }

    winningCriteria = {
      3: 5000,
      4: 50000,
      5: [1500000, 30000000],
      6: 2000000000,
    }
  }

  compareNumbers(purchasedNumber) {
    let count = 0
    let bonus = false
    for (let number in purchasedNumber) {
      if (this.winningNumber.includes(number)) {
        count += 1
      }
      if (number == this.bonusNumber) {
        bonus = true
      }
    }

    if (count == 5 && bonus == true) {
      this.result[count][1] += 1
    } else if (count == 5) {
      this.result[count][0] += 1
    }
    this.result[count] += 1
  }

  lottoResult() {
    for (i = 0; i < this.purchasedNumbers.length; i++) {
      compareNumbers(this.purchasedNumbers[i])
    }

    MissionUtils.Console.print(`
    당첨 통계
    ---
    3개 일치 (5,000원) - ${this.result[3]}개
    4개 일치 (50,000원) - ${this.result[4]}개
    5개 일치 (1,500,000원) - ${this.result[5][0]}개
    5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.result[5][1]}개
    6개 일치 (2,000,000,000원) - ${this.result[6]}개
    `)
  }

  yield() {
    let profit = 0
    for (let res in this.result) {
      if (res == 5) {
        profit += winningCriteria[res][0] * this.result[res][0]
        profit += winningCriteria[res][1] * this.result[res][1]
        continue
      }
      profit += winningCriteria[res] * this.result[res]
    }

    return profit / (purchasedNumbers.length * 1000) * 100
  }
}

module.exports = ResultOfLotto;