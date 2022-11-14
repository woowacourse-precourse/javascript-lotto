const { LOTTO_LENGTH, MIN_NUMBER, MAX_NUMBER } = require("../utils/constants");
const { ERROR } = require("../utils/messages");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validateNumberLength(numbers) {
    if (numbers.length !== LOTTO_LENGTH) {
      throw new Error(ERROR.NUMBERS_LENGTH);
    }
  }

  #validateNumberRange(numbers) {
    numbers.forEach((number) => {
      if (number < MIN_NUMBER || number > MAX_NUMBER) {
        throw new Error(ERROR.NUMBER_RANGE);
      }
    });
  }

  #validateNumberDuplicate(numbers) {
    if (numbers.length !== new Set(numbers).size) {
      throw new Error(ERROR.NUMBERS_DUPLICATE);
    }
  }

  #validate(numbers) {
    this.#validateNumberLength(numbers);
    this.#validateNumberRange(numbers);
    this.#validateNumberDuplicate(numbers);
  }

  get numbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
