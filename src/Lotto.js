const { MESSAGE } = require('./Constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  /**
   * 로또 번호 배열이 주어지면 에러를 체크합니다.
   * @param {Array<number>} numbers - 로또 배열
   */
  validate(numbers) {
    if (numbers.length !== 6) throw new Error(MESSAGE.ERROR_SIX_ELEMENT);
    const numSet = new Set(numbers);
    if (numSet.size !== 6) throw new Error(MESSAGE.ERROR_NO_DUPLICATE);

    numbers.forEach((num) => {
      if (!Number.isInteger(num)) throw new Error(MESSAGE.ERROR_NO_INTEGER);
      if (num < 1 || num > 45) throw new Error(MESSAGE.ERROR_OUT_OF_RANGE);
    });
  }

  /**
   * 로또 하나의 번호를 반환합니다.
   * @return {Array<number>} numbers - 로또 배열
   */
  getNums() {
    return this.#numbers;
  }
}

module.exports = Lotto;
