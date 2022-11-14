const { RANKING_FROM_MATCH_COUNT, RANK_ACCORDING_REWARD } = require("./constants");
class Calculator {
  #myNumbers;
  #winningNumber;
  #prizeStatus;
  #earningMoney = 0;
  constructor(myNumbers, winningNumber) {
    this.#myNumbers = myNumbers;
    this.#winningNumber = winningNumber;
    this.setWinningState();
  }

  setWinningState() {
    this.#prizeStatus = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0
    };
  }

  applyWinnerSelectionRule(myLotto) {
    const matchCount = myLotto.filter((number) =>
      this.#winningNumber["winningNumber"].includes(number)
    ).length;

    return matchCount;
  }

  getWinningResult() {
    let matchCountFromEachLotto;
    Array.from(this.#myNumbers).forEach((myNumber) => {
      matchCountFromEachLotto = this.applyWinnerSelectionRule(myNumber);

      if (matchCountFromEachLotto && matchCountFromEachLotto >= 3) {
        this.#prizeStatus[RANKING_FROM_MATCH_COUNT[matchCountFromEachLotto]] += 1;
      }
    });
    return this.#prizeStatus;
  }
}

module.exports = Calculator;
