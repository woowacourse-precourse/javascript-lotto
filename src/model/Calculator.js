const {
  RANKING_FROM_MATCH_COUNT,
  RANK_ACCORDING_REWARD,
  NUMBER_TYPE
} = require("../constants/value");

class Calculator {
  #myNumbers;
  #winningNumber;
  #prizeStatus = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  };
  #earningMoney = 0;

  applyWinnerSelectionRule(myLotto) {
    const matchCount = myLotto.filter((number) =>
      this.#winningNumber[NUMBER_TYPE.WINNING_NUMBER].includes(number)
    ).length;

    if (this.isSecondPlace(matchCount, myLotto)) {
      this.#prizeStatus[2] += 1;
      return;
    }
    return matchCount;
  }

  isSecondPlace(matchCount, myLotto) {
    return matchCount === 5 && myLotto.includes(this.#winningNumber[NUMBER_TYPE.BONUS_NUMBER]);
  }

  getWinningResult(myNumbers, winningNumber) {
    this.setNumbers(myNumbers, winningNumber);
    this.compareWinningNumberToMine();
    return this.#prizeStatus;
  }

  compareWinningNumberToMine() {
    let matchCountFromEachLotto;
    Array.from(this.#myNumbers).forEach((myNumber) => {
      matchCountFromEachLotto = this.applyWinnerSelectionRule(myNumber);
      if (this.isRanked(matchCountFromEachLotto)) {
        this.#prizeStatus[RANKING_FROM_MATCH_COUNT[matchCountFromEachLotto]] += 1;
      }
    });
  }

  isRanked(myRank) {
    return myRank && myRank >= 3;
  }

  setNumbers(myNumbers, winningNumber) {
    this.#myNumbers = myNumbers;
    this.#winningNumber = winningNumber;
  }

  getEarningRate(moneyInput) {
    Object.keys(this.#prizeStatus).forEach((key) => {
      this.#earningMoney += this.#prizeStatus[key] * RANK_ACCORDING_REWARD[key];
    });
    this.#earningMoney /= moneyInput;
    this.getRoundNumber();
    return this.makePercent(this.#earningMoney);
  }

  getRoundNumber() {
    Math.round(this.#earningMoney * 10) / 10;
  }

  makePercent(number) {
    return number * 100;
  }
}

module.exports = Calculator;
