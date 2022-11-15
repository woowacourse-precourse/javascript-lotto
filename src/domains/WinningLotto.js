const Messages = require('../constants/Messages');
const LottoError = require('../errors/LottoError');
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
    this.validate();
  }

  validate() {
    this.#validateBonusNumberType();
    this.#validateBonusNumberDuplication();
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

  /**
   * @param {number} investment
   * @param {Reward[]} rewards
   * @returns {string}
   */
  static getRateOfReturn(investment, rewards) {
    const earning = rewards.reduce((money, reward) => money + reward.getMoney(), 0);
    const rateOfReturn = (Math.round((earning / investment) * 10000) / 100).toFixed(1);
    const [integerPart, fractionPart] = rateOfReturn.split('.');

    return `${Number(integerPart).toLocaleString()}.${fractionPart}`;
  }

  #validateBonusNumberType() {
    if (typeof this.#bonusNumber !== 'number' || Number.isNaN(this.#bonusNumber)) {
      throw new LottoError(Messages.WINNING_LOTTO_VALIDATE_TYPE_MUST_NUMBER);
    }
  }

  #validateBonusNumberDuplication() {
    if (this.#lotto.hasNumber(this.#bonusNumber)) {
      throw new LottoError(Messages.WINNING_LOTTO_VALIDATE_NO_DUPLICATE);
    }
  }
}

module.exports = WinningLotto;
