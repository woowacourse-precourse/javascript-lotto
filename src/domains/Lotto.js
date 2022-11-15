const MissionUtils = require('@woowacourse/mission-utils');

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

  /**
   * @param {number} money
   * @returns {Lotto[]}
   */
  static buyLottos(money) {
    if (money < Lotto.PRICE) {
      throw new Error('[ERROR] 최소 로또를 1개 이상 구매할 수 있는 금액을 입력해야 합니다.');
    }
    if (money % Lotto.PRICE !== 0) {
      throw new Error('[ERROR] 로또를 구입한 후 남는 금액이 없어야 합니다.');
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
    if (!this.#numbers.every((number) => typeof number === 'number')) {
      throw new Error('[ERROR] 로또 번호는 Number 타입이어야 합니다.');
    }
    if (this.#numbers.length !== Lotto.NUMBER_COUNT) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (
      !this.#numbers.every((number) => Lotto.NUMBER_MIN <= number && number <= Lotto.NUMBER_MAX)
    ) {
      throw new Error('[ERROR] 로또 번호는 1에서 45 사이여야 합니다.');
    }
    if (new Set(this.#numbers).size !== this.#numbers.length) {
      throw new Error('[ERROR] 로또 번호는 모두 중복되어선 안됩니다.');
    }
  }

  hasNumber(number) {
    return this.#numbers.includes(number);
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
