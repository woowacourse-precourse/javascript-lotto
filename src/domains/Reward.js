const Lotto = require('./Lotto');
const WinningLotto = require('./WinningLotto');

class Reward {
  static DEFAULT_REWARDS = Object.freeze([
    new Reward('6개 일치', 2_000_000_000, (numberCount) => numberCount === 6),
    new Reward(
      '5개 일치, 보너스 볼 일치',
      30_000_000,
      (numberCount, bonusNumber) => numberCount === 5 && bonusNumber,
    ),
    new Reward('5개 일치', 15_000_000, (numberCount) => numberCount === 5),
    new Reward('4개 일치', 50_000, (numberCount) => numberCount === 4),
    new Reward('3개 일치', 5_000, (numberCount) => numberCount === 3),
  ]);

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
