const { YIELD, WINNING_PRIZE, MESSAGE, RANK } = require('./constants');

class WinningResult {
  constructor(lottoSet, winningNumberArr, bonusNumber) {
    this.lottoArr = [...lottoSet].map(elem => JSON.parse(elem));
    this.winningNumberArr = winningNumberArr;
    this.bonusNumber = bonusNumber;
    this.result = { 5000: 0, 50000: 0, 1500000: 0, 30000000: 0, 2000000000: 0 };
    this.sum = 0;
    this.setResult();
  }

  setResult() {
    this.lottoArr.forEach(lotto => {
      let sameArr = lotto.filter(num => this.winningNumberArr.includes(num));
      if (sameArr.length === 3) this.result[WINNING_PRIZE.FIFTH]++;
      if (sameArr.length === 4) this.result[WINNING_PRIZE.FOURTH]++;
      if (sameArr.length === 5 && lotto.includes(this.bonusNumber))
        this.result[WINNING_PRIZE.THIRD]++;
      if (sameArr.length === 5 && !lotto.includes(this.bonusNumber))
        this.result[WINNING_PRIZE.SECOND]++;
      if (sameArr.length === 6) this.result[WINNING_PRIZE.FIRST]++;
    });
  }

  getResultMessage(rank) {
    let result = '';
    if (rank === RANK.FIFTH) result = MESSAGE.FIFTH_PLACE_RESULT(this.result[WINNING_PRIZE.FIFTH]);
    if (rank === RANK.FOURTH)
      result = MESSAGE.FOURTH_PLACE_RESULT(this.result[WINNING_PRIZE.FOURTH]);
    if (rank === RANK.THIRD) result = MESSAGE.THIRD_PLACE_RESULT(this.result[WINNING_PRIZE.THIRD]);
    if (rank === RANK.SECOND)
      result = MESSAGE.SECOND_PLACE_RESULT(this.result[WINNING_PRIZE.SECOND]);
    if (rank === RANK.FIRST) result = MESSAGE.FIRST_PLACE_RESULT(this.result[WINNING_PRIZE.FIRST]);
    return result;
  }

  calculateSum() {
    return Object.entries(this.result).reduce((acc, [key, value]) => acc + key * value, 0);
  }

  setYield(cash) {
    this.sum = this.calculateSum();
    return Math.round((this.sum * YIELD.PERCENT * YIELD.ROUND) / cash) / YIELD.ROUND;
  }
}

module.exports = WinningResult;
