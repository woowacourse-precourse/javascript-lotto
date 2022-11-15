const Lotto = require('./Lotto');
const Reward = require('./Reward');

class WinningLotto {
  /** @type {Lotto} */
  #lotto;

  /** @type {number} */
  #bonusNumber;

  /** @type {Reward[]} */
  #availableRewards;

  /**
   * @param {Lotto} lotto
   * @param {number} bonusNumber
   * @param {Reward[]} availableRewards
   */
  constructor(lotto, bonusNumber, availableRewards = Reward.DEFAULT_REWARDS) {
    this.#lotto = lotto;
    this.#bonusNumber = bonusNumber;
    this.#availableRewards = availableRewards;
  }

  /**
   * @param {Lotto} lotto
   * @returns {number}
   */
  countMatchNumber(lotto) {
    const [numbers, otherNumbers] = [this.#lotto.getNumbers(), lotto.getNumbers()];
    const count = numbers
      .map((number) => (otherNumbers.includes(number) ? 1 : 0))
      .reduce((a, b) => a + b, 0);

    return count;
  }

  /**
   * @param {Lotto} lotto
   * @returns {boolean}
   */
  isMatchBonusNumber(lotto) {
    return lotto.hasNumber(this.#bonusNumber);
  }

  getAvailableRewards() {
    return this.#availableRewards;
  }

  /**
   * @param {Lotto} lotto
   * @returns {Reward|null}
   */
  getRewardFor(lotto) {
    return this.#availableRewards.find((reward) => reward.isEligible(this, lotto)) ?? null;
  }
}

module.exports = WinningLotto;
