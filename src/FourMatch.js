const WinningHistory = require('./WinningHistory');
const { PRINT, PRIZE } = require('./constant/Constant');

class FourMatch extends WinningHistory {
  #winningNumbers;

  constructor(winningNumbers) {
    super();
    this.#winningNumbers = winningNumbers;
  }

  getReward() {
    return PRIZE.FOURTH.MONEY;
  }

  getMessage() {
    return PRINT.STATISTICS_RESULT(
      PRIZE.FOURTH.TOTAL_COUNT,
      PRIZE.FOURTH.REWARD,
      this.count,
    );
  }

  checkRule(lotto) {
    return (
      lotto.checkSameNumber(this.#winningNumbers) === PRIZE.FOURTH.TOTAL_COUNT
    );
  }
}

module.exports = FourMatch;
