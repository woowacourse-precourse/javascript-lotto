const Lotto = require('./Lotto');

class WinningLotto {
  /** @type {Lotto} */
  #lotto;

  /** @type {number} */
  #bonusNumber;

  /**
   * @param {Lotto} lotto
   * @param {number} bonusNumber
   */
  constructor(lotto, bonusNumber) {
    this.#lotto = lotto;
    this.#bonusNumber = bonusNumber;
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
}

module.exports = WinningLotto;
