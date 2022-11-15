const WinningHistory = require('./WinningHistory');
const { PRINT, PRIZE } = require('./constant/Constant');

class SixMatch extends WinningHistory {
  #winningNumbers;

  constructor(winningNumbers) {
    super();
    this.#winningNumbers = winningNumbers;
  }

  getReward() {
    return PRIZE.FIRST.MONEY;
  }

  getMessage() {
    return PRINT.STATISTICS_RESULT(
      PRIZE.FIRST.TOTAL_COUNT,
      PRIZE.FIRST.REWARD,
      this.count,
    );
  }

  checkRule(lotto) {
    return (
      lotto.checkSameNumber(this.#winningNumbers) === PRIZE.FIRST.TOTAL_COUNT
    );
  }
}

module.exports = SixMatch;
