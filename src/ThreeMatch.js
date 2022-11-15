const WinningHistory = require('./WinningHistory');
const { PRINT, PRIZE } = require('./constant/Constant');

class ThreeMatch extends WinningHistory {
  #winningNumbers;

  constructor(winningNumbers) {
    super();
    this.#winningNumbers = winningNumbers;
  }

  getReward() {
    return PRIZE.FIFTH.MONEY;
  }

  getMessage() {
    return PRINT.STATISTICS_RESULT(
      PRIZE.FIFTH.TOTAL_COUNT,
      PRIZE.FIFTH.REWARD,
      this.count,
    );
  }

  checkRule(lotto) {
    return (
      lotto.checkSameNumber(this.#winningNumbers) === PRIZE.FIFTH.TOTAL_COUNT
    );
  }
}

module.exports = ThreeMatch;
