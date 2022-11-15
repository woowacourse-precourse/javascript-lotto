const MissionUtils = require('@woowacourse/mission-utils');
const Messages = require('../constants/Messages');
const LottoError = require('../errors/LottoError');

class Lotto {
  /** 로또가 가질 수 있는 숫자 갯수 */
  static NUMBER_COUNT = 6;

  /** 로또가 가질 수 있는 숫자의 최소값 */
  static NUMBER_MIN = 1;

  /** 로또가 가질 수 있는 숫자의 최대값 */
  static NUMBER_MAX = 45;

  /** 로또 1장의 가격 */
  static PRICE = 1000;

  /** @type {number[]} */
  #numbers;

  /**
   * @param {number[]} numbers
   */
  constructor(numbers) {
    numbers.sort((a, b) => a - b);
    this.#numbers = numbers;
    this.validate();
  }

  static fromRandom() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
      Lotto.NUMBER_MIN,
      Lotto.NUMBER_MAX,
      Lotto.NUMBER_COUNT,
    );
    return new Lotto(numbers);
  }

  static fromString(text) {
    return new Lotto(text.split(',').map(Number));
  }

  /**
   * @param {number} money
   * @returns {Lotto[]}
   */
  static buyLottos(money) {
    if (money < Lotto.PRICE) {
      throw new LottoError(Messages.LOTTO_BUY_AT_LEAST_ONE);
    }
    if (money % Lotto.PRICE !== 0) {
      throw new LottoError(Messages.LOTTO_BUY_NO_CHANGE);
    }

    const amount = money / Lotto.PRICE;
    return Array(amount)
      .fill()
      .map(() => Lotto.fromRandom());
  }

  /**
   * @param {number[]} numbers
   */
  validate() {
    if (!this.#numbers.every((number) => typeof number === 'number' && !Number.isNaN(number))) {
      throw new LottoError(Messages.LOTTO_VALIDATE_TYPE_MUST_NUMBER);
    }
    if (this.#numbers.length !== Lotto.NUMBER_COUNT) {
      throw new LottoError(Messages.LOTTO_VALIDATE_NUMBER_COUNT_MUST, Lotto.NUMBER_COUNT);
    }
    if (
      !this.#numbers.every((number) => Lotto.NUMBER_MIN <= number && number <= Lotto.NUMBER_MAX)
    ) {
      throw new LottoError(
        Messages.LOTTO_VALIDATE_NUMBER_RANGE_MUST,
        Lotto.NUMBER_MIN,
        Lotto.NUMBER_MAX,
      );
    }
    if (new Set(this.#numbers).size !== this.#numbers.length) {
      throw new LottoError(Messages.LOTTO_VALIDATE_NO_DUPLICATE);
    }
  }

  hasNumber(number) {
    return this.#numbers.includes(number);
  }

  getNumbers() {
    return this.#numbers;
  }

  toString() {
    return `[${this.#numbers.join(', ')}]`;
  }
}

module.exports = Lotto;
