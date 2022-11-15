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
}

module.exports = WinningLotto;
