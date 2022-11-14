const { ERRORS } = require('../constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }

  #validate(numbers) {
    if (!this.#hasValidLength(numbers)) {
      throw new Error(ERRORS.LOTTO.LENGTH);
    }

    if (!this.#hasUniqueValues(numbers)) {
      throw new Error(ERRORS.LOTTO.UNIQUE);
    }

    if (!this.#hasNumberValuesOnly(numbers)) {
      throw new Error(ERRORS.LOTTO.VALUE);
    }

    if (!this.#hasValidRangeValues(numbers)) {
      throw new Error(ERRORS.LOTTO.RANGE);
    }
  }

  #hasValidLength(numbers) {
    return numbers.length === 6;
  }

  #hasUniqueValues(numbers) {
    return new Set(numbers).size === 6;
  }

  #hasNumberValuesOnly(numbers) {
    return numbers.every((number) => this.#isNumber(number));
  }

  #isNumber(value) {
    return typeof value === 'number';
  }

  #hasValidRangeValues(numbers) {
    return numbers.some((number) => this.#isInRange(number));
  }

  #isInRange(number) {
    return number >= 1 && number <= 45;
  }
}

module.exports = Lotto;
