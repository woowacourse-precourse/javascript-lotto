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

    if (this.isSecondPlace(matchCount, myLotto)) {
      this.#prizeStatus[2] += 1;
      return;
    }
    return matchCount;
  }
}

module.exports = Calculator;
