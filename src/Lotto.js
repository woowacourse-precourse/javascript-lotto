const { ERROR_MESSAGE, LOTTO_NUMBER } = require('./constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== LOTTO_NUMBER.LENGTH) {
      throw new Error(ERROR_MESSAGE.WINNING_NUMBER_LENGTH_ERROR);
    }
    const numberSet = new Set(numbers);
    if (numberSet.size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.WINNING_NUMBER_NOT_DIFFERENT_NUMBER_ERROR);
    }
    let isNumberInRange = numbers.every(number => {
      return number && number >= LOTTO_NUMBER.START && number <= LOTTO_NUMBER.END;
    });
    if (!isNumberInRange) {
      throw new Error(ERROR_MESSAGE.NUM_IN_RANGE_ERROR);
    }
  }
}

module.exports = Lotto;
