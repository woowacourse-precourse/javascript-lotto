const Lotto = require('./Lotto');
const WinningLotto = require('./WinningLotto');

class Reward {
  /** @type {string} */
  #title;

  /** @type {number} */
  #money;

  /** @type {(numberCount: number, bonusNumber: boolean) => boolean} */
  #condition;

  /**
   * @param {string} title
   * @param {number} money
   * @param {(numberCount: number, bonusNumber: boolean) => boolean} condition
   */
  constructor(title, money, condition) {
    this.#title = title;
    this.#money = money;
    this.#condition = condition;
  }

  /**
   * @param {WinningLotto} winningLotto
   * @param {Lotto} lotto
   * @returns {boolean}
   */
  isEligible(winningLotto, lotto) {
    return this.#condition(
      winningLotto.countMatchNumber(lotto),
      winningLotto.isMatchBonusNumber(lotto),
    );
  }

  getMoney() {
    return this.#money;
  }
}

module.exports = Reward;
