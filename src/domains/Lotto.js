const { Random } = require('@woowacourse/mission-utils');
const Messages = require('../constants/Messages');
const LottoError = require('../errors/LottoError');

class Lotto {
  /**
   * @member {number} NUMBER_COUNT 로또가 가질 수 있는 숫자 갯수
   * @member {number} NUMBER_MIN 로또가 가질 수 있는 숫자의 최소값
   * @member {number} NUMBER_MAX 로또가 가질 수 있는 숫자의 최대값
   * @member {number} PRICE로또 1장의 가격
   */

  static NUMBER_COUNT = 6;

  static NUMBER_MIN = 1;

  static NUMBER_MAX = 45;

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
    this.some = 12;
  }

  /**
   * 무작위 번호를 가지는 로또를 생성한다.
   *
   * @returns {Lotto}
   */
  static fromRandom() {
    const numbers = Random.pickUniqueNumbersInRange(
      Lotto.NUMBER_MIN,
      Lotto.NUMBER_MAX,
      Lotto.NUMBER_COUNT,
    );
    return new Lotto(numbers);
  }

  /**
   * 문자열로부터 숫자를 파싱하여 로또를 생성한다.
   *
   * @param {string} text
   * @returns {Lotto}
   */
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
    return [...Array(amount)].map(() => Lotto.fromRandom());
  }

  /**
   * @param {number[]} numbers
   */
  validate() {
    this.#validateType();
    this.#validateNumberCount();
    this.#validateNumberRange();
    this.#validateDuplication();
  }

  /**
   * @param {number} number
   * @returns {boolean}
   */
  hasNumber(number) {
    return this.#numbers.includes(number);
  }

  /**
   * @returns {number[]}
   */
  getNumbers() {
    return this.#numbers;
  }

  toString() {
    return `[${this.#numbers.join(', ')}]`;
  }

  #validateType() {
    if (!this.#numbers.every((number) => typeof number === 'number' && !Number.isNaN(number))) {
      throw new LottoError(Messages.LOTTO_VALIDATE_TYPE_MUST_NUMBER);
    }
  }

  #validateNumberCount() {
    if (this.#numbers.length !== Lotto.NUMBER_COUNT) {
      throw new LottoError(Messages.LOTTO_VALIDATE_NUMBER_COUNT_MUST, Lotto.NUMBER_COUNT);
    }
  }

  #validateNumberRange() {
    if (
      !this.#numbers.every((number) => Lotto.NUMBER_MIN <= number && number <= Lotto.NUMBER_MAX)
    ) {
      throw new LottoError(
        Messages.LOTTO_VALIDATE_NUMBER_RANGE_MUST,
        Lotto.NUMBER_MIN,
        Lotto.NUMBER_MAX,
      );
    }
  }

  #validateDuplication() {
    if (new Set(this.#numbers).size !== this.#numbers.length) {
      throw new LottoError(Messages.LOTTO_VALIDATE_NO_DUPLICATE);
    }
  }
}

module.exports = Lotto;
