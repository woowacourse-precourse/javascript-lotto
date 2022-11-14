class Lotto {
  /** 로또가 가질 수 있는 숫자 갯수 */
  static NUMBER_COUNT = 6;

  /** 로또가 가질 수 있는 숫자의 최소값 */
  static NUMBER_MIN = 1;

  /** 로또가 가질 수 있는 숫자의 최대값 */
  static NUMBER_MAX = 45;

  /** @type {number[]} */
  #numbers;

  /**
   * @param {number[]} numbers
   */
  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers.sort();
  }

  /**
   * @param {number[]} numbers
   */
  validate(numbers) {
    if (numbers.length !== Lotto.NUMBER_COUNT) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (!numbers.every((number) => Lotto.NUMBER_MIN <= number && number <= Lotto.NUMBER_MAX)) {
      throw new Error('[ERROR] 로또 번호는 1에서 45 사이여야 합니다.');
    }
    if (new Set(numbers).size() !== numbers.length) {
      throw new Error('[ERROR] 로또 번호는 모두 중복되어선 안됩니다.');
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
