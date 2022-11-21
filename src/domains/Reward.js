const Messages = require('../constants/Messages');
const Lotto = require('./Lotto');
const WinningLotto = require('./WinningLotto');

class Reward {
  static DEFAULT_REWARDS = Object.freeze([
    new Reward(
      Messages.format(Messages.REWARD_TITLE_NUMBER_MATCHES, 6),
      2_000_000_000,
      (numberCount) => numberCount === 6,
    ),
    new Reward(
      Messages.format(Messages.REWARD_TITLE_NUMBER_AND_BONUS_MATCHES, 5),
      30_000_000,
      (numberCount, bonusNumber) => numberCount === 5 && bonusNumber,
    ),
    new Reward(
      Messages.format(Messages.REWARD_TITLE_NUMBER_MATCHES, 5),
      1_500_000,
      (numberCount) => numberCount === 5,
    ),
    new Reward(
      Messages.format(Messages.REWARD_TITLE_NUMBER_MATCHES, 4),
      50_000,
      (numberCount) => numberCount === 4,
    ),
    new Reward(
      Messages.format(Messages.REWARD_TITLE_NUMBER_MATCHES, 3),
      5_000,
      (numberCount) => numberCount === 3,
    ),
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

  toString() {
    return `${this.#title} (${this.#money.toLocaleString()}원)`;
  }
}

module.exports = Reward;
