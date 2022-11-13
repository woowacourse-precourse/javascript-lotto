const CONSTANT = require('../constant/constants.js');

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
    if (!CHECK.ISNUMBER(numbers.join(''))) throw new Error(`${ERROR_MSG.NAN}`);
    if (CHECK.ISLENGTH(numbers)) throw new Error(`${ERROR_MSG.WRONG_LENGTH}`);
    if (CHECK.ISDUPLICATE(numbers)) throw new Error(`${ERROR_MSG.DUPLICATE}`);
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

  increaseCount() {
    this.#count += 1;
  }

  setIsBonus() {
    this.#isBonus = true;
  }
}

module.exports = Lotto;
