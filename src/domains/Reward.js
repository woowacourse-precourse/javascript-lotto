const Lotto = require('./Lotto');
const WinningLotto = require('./WinningLotto');

class Reward {
  /** @type {string} */
  #title;

  /** @type {number} */
  #money;

  /** @type {(winningLotto: WinningLotto, lotto: Lotto) => boolean} */
  #condition;

  /**
   * @param {string} title
   * @param {number} money
   * @param {(winningLotto: WinningLotto, lotto: Lotto) => boolean} condition
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
    return this.#condition(winningLotto, lotto);
  }

  getMoney() {
    return this.#money;
  }
}

module.exports = Reward;
