class Lotto {
  /** 로또가 가질 수 있는 숫자 갯수 */
  static NUMBER_COUNT = 6;

  /** @type {number[]} */
  #numbers;

  /**
   * @param {numbers[]} numbers
   */
  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== Lotto.NUMBER_COUNT) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }
}

module.exports = Lotto;
