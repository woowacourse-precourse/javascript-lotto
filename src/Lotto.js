const { NUMBERS, ERROR_MESSAGES } = require("./utils/Constants");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const duplicatInputNumbers = [...new Set(numbers)];
    if (numbers.length !== duplicatInputNumbers.length) {
      throw new Error(ERROR_MESSAGES.DUPLICATED_LOTTO_NUM);
    }
    if (numbers.length !== NUMBERS.CORRECT_LOTTO_LENGTH) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_LENGTH);
    }
    if (numbers.includes(NaN)) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_TYPE);
    }
    if (this.circuitItemsForRange(numbers).includes(false)) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_RANGE);
    }
  }

  circuitItemsForRange(numbers) {
    return numbers.map((value) => {
      if (value >= NUMBERS.MIN_LOTTO_NUMBER && value <= NUMBERS.MAX_LOTTO_NUMBER) {
        return true;
      }
      return false;
    });
  }

  output() {
    return this.#numbers;
  }
}

module.exports = Lotto;
