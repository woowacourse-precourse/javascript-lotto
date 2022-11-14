const { ERROR_MESSAGE, LOTTO } = require('../constants');
const { ValidationError } = require('../errors');

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
    const validations = {
      LENGTH: this.#hasValidLength.bind(this),
      UNIQUE: this.#hasUniqueValues.bind(this),
      VALUE: this.#hasNumberValuesOnly.bind(this),
      RANGE: this.#hasValidRangeValues.bind(this),
    };

    Object.entries(validations).forEach(([key, validateLotto]) => {
      if (!validateLotto(numbers)) {
        throw new ValidationError(ERROR_MESSAGE.LOTTO[key]);
      }
    });
  }

  #hasValidLength(numbers) {
    return numbers.length === LOTTO.NUMBER_COUNT;
  }

  #hasUniqueValues(numbers) {
    return new Set(numbers).size === LOTTO.NUMBER_COUNT;
  }

  #hasNumberValuesOnly(numbers) {
    return numbers.every((number) => this.#isNumber(number));
  }

  #isNumber(value) {
    return typeof value === 'number';
  }

  #hasValidRangeValues(numbers) {
    return numbers.every((number) => this.#isInRange(number));
  }

  #isInRange(number) {
    return number >= LOTTO.MIN_NUMBER && number <= LOTTO.MAX_NUMBER;
  }
}

module.exports = Lotto;
