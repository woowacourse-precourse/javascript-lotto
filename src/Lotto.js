const { ERROR_MESSAGE } = require('./constants/constant');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.validate();
  }

  validate() {
    this.isWrongNumber();
    this.isNumber();
    this.isUniqueNumber();
    this.isNumberInRange();
  }

  isWrongNumber() {
    if (this.#numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.IS_WRONG_NUMBER);
    }
  }

  // TODO: 추가 기능 구현
  isNumber() {
    this.#numbers.map((item) => {
      if (Number.isNaN(parseInt(item, 10))) {
        throw new Error(ERROR_MESSAGE.NAN_ERROR);
      }
    });
  }

  isUniqueNumber() {
    const check = new Set(this.#numbers);
    if (check.size !== this.#numbers.length) {
      throw new Error(ERROR_MESSAGE.NOT_UNIQUE_NUMBER);
    }
  }

  isNumberInRange() {
    this.#numbers.map((item) => {
      if (!(1 <= item && item <= 45)) {
        throw new Error(ERROR_MESSAGE.NOT_IN_RANGE);
      }
    });
  }
}

module.exports = Lotto;
