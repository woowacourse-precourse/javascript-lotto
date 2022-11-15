const CONSTANT = require('./constant/constants.js');

class Lotto {
  #numbers;

  #count;

  #isBonus;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.sort();

    this.#count = 0;
    this.#isBonus = false;
  }

  validate(numbers) {
    const { ERROR_MSG, CHECK } = CONSTANT;
    if (!CHECK.IS_NUMBER(numbers.join(''))) throw new Error(`${ERROR_MSG.NAN}`);
    if (CHECK.IS_LENGTH(numbers)) throw new Error(`${ERROR_MSG.WRONG_LENGTH}`);
    if (CHECK.IS_DUPLICATE(numbers)) throw new Error(`${ERROR_MSG.DUPLICATE}`);
    if (!CHECK.IS_IN_RANGE(numbers)) throw new Error(`${ERROR_MSG.OUT_OF_RANGE}`);
  }

  sort() {
    this.#numbers.sort((a, b) => a - b);
  }

  get numbers() {
    return this.#numbers;
  }

  get count() {
    return this.#count;
  }

  get isBonus() {
    return this.#isBonus;
  }

  increaseCount() {
    this.#count += 1;
  }

  setIsBonus() {
    this.#isBonus = true;
  }
}

module.exports = Lotto;
