const { LOTTO, ERROR_MESSAGE } = require("../constants");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.getNumbers = this.getNumbers.bind(this);
  }

  validate(numbers) {
    console.log({ numbers });
    if (numbers.length !== LOTTO.LENGTH) {
      throw new Error(ERROR_MESSAGE.COMMA);
    }
    if (!numbers.every(this.isNumber)) {
      throw new Error(ERROR_MESSAGE.NAN);
    }
    if (!numbers.every(this.isValidRange)) {
      throw new Error(ERROR_MESSAGE.RANGE);
    }
    if (this.hasDuplicate(numbers)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE);
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  isNumber(number) {
    return Number.isInteger(number);
  }

  isValidRange(number) {
    return LOTTO.MIN <= number && number <= LOTTO.MAX;
  }

  hasDuplicate(numbers) {
    return new Set(numbers).size !== numbers.length;
  }
}

module.exports = Lotto;
