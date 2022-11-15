const WinningHistory = require('./WinningHistory');
const { PRINT, PRIZE } = require('./constant/Constant');

class FiveMatchWithBonus extends WinningHistory {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    super();
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  getReward() {
    return PRIZE.SECOND.MONEY;
  }

  getMessage() {
    return PRINT.STATISTICS_RESULT_BONUS(
      PRIZE.SECOND.TOTAL_COUNT,
      PRIZE.SECOND.REWARD,
      this.count,
    );
  }

  checkRule(lotto) {
    return (
      lotto.checkSameNumber(this.#winningNumbers) ===
        PRIZE.SECOND.TOTAL_COUNT && lotto.include(this.#bonusNumber)
    );
  }
}

module.exports = FiveMatchWithBonus;
