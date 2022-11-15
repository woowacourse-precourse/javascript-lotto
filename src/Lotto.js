const { ERROR_MESSAGE, LOTTO_NUMBER } = require('./constant');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    for (let number of numbers) {
      const checkNum =
        /\d/.test(number) === false || typeof number !== 'number';
      const checkInteger = Number.isInteger(number);
      const checkRange =
        number < LOTTO_NUMBER.MIN_RANGE || number > LOTTO_NUMBER.MAX_RANGE;
      if (checkNum || checkRange || !checkInteger) {
        throw new Error(ERROR_MESSAGE.INPUT_WINNING_NUMBER);
      }
    }
    if (numbers.length !== 6 || [...new Set(numbers)].length !== 6) {
      throw new Error(ERROR_MESSAGE.INPUT_NOT_DUPLICATE_SIX_NUMBER);
    }
  }
}

module.exports = Lotto;
