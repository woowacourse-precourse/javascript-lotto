const { YIELD, WINNING_PRIZE, MESSAGE, RANK, MONEY_UNIT } = require('./constants');

class WinningResult {
  #lottoArr;

  #winningNumberArr;

  #bonusNumber;

  #result;

  #sum;

  constructor(lottoSet, winningNumberArr, bonusNumber) {
    this.#lottoArr = [...lottoSet].map(elem => JSON.parse(elem));
    this.#winningNumberArr = winningNumberArr;
    this.#bonusNumber = bonusNumber;
    this.#result = { 5000: 0, 50000: 0, 1500000: 0, 30000000: 0, 2000000000: 0 };
    this.#sum = 0;
    this.setResult();
  }

  getMatchedLottoNumbers(arr1, arr2) {
    let matchedArr = arr1.filter(num => arr2.includes(num));
    return matchedArr.length;
  }

  getResult() {
    return this.#result;
  }

  setResult() {
    this.#lottoArr.forEach(lotto => {
      const matchedNumber = this.getMatchedLottoNumbers(lotto, this.#winningNumberArr);
      if (matchedNumber === 3) this.#result[WINNING_PRIZE.FIFTH]++;
      if (matchedNumber === 4) this.#result[WINNING_PRIZE.FOURTH]++;
      if (matchedNumber === 5 && !lotto.includes(this.#bonusNumber))
        this.#result[WINNING_PRIZE.THIRD]++;
      if (matchedNumber === 5 && lotto.includes(this.#bonusNumber))
        this.#result[WINNING_PRIZE.SECOND]++;
      if (matchedNumber === 6) this.#result[WINNING_PRIZE.FIRST]++;
    });
  }

  winningResultMessage(rank) {
    let message = '';
    if (rank === RANK.FIFTH)
      message = MESSAGE.FIFTH_PLACE_RESULT(this.#result[WINNING_PRIZE.FIFTH]);
    if (rank === RANK.FOURTH)
      message = MESSAGE.FOURTH_PLACE_RESULT(this.#result[WINNING_PRIZE.FOURTH]);
    if (rank === RANK.THIRD)
      message = MESSAGE.THIRD_PLACE_RESULT(this.#result[WINNING_PRIZE.THIRD]);
    if (rank === RANK.SECOND)
      message = MESSAGE.SECOND_PLACE_RESULT(this.#result[WINNING_PRIZE.SECOND]);
    if (rank === RANK.FIRST)
      message = MESSAGE.FIRST_PLACE_RESULT(this.#result[WINNING_PRIZE.FIRST]);
    return message;
  }

  calculateSum() {
    return Object.entries(this.#result).reduce((acc, [key, value]) => acc + key * value, 0);
  }

  setYield() {
    this.#sum = this.calculateSum();
    const cash = this.#lottoArr.length * MONEY_UNIT;
    return parseFloat(Math.round((this.#sum * YIELD.PERCENT * 10) / cash) / 10).toFixed(
      YIELD.ROUND,
    );
  }
}

module.exports = WinningResult;
