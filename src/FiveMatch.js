const WinningHistory = require('./WinningHistory');
const { PRINT, PRIZE } = require('./constant/Constant');

class FiveMatch extends WinningHistory {
  #winningNumbers;

  constructor(winningNumbers) {
    super();
    this.#winningNumbers = winningNumbers;
  }

  getReward() {
    return PRIZE.THIRD.MONEY;
  }

  getMessage() {
    return PRINT.STATISTICS_RESULT(
      PRIZE.THIRD.TOTAL_COUNT,
      PRIZE.THIRD.REWARD,
      this.count,
    );
  }

  checkRule(lotto) {
    return (
      lotto.checkSameNumber(this.#winningNumbers) === PRIZE.THIRD.TOTAL_COUNT
    );
  }
}

module.exports = FiveMatch;
