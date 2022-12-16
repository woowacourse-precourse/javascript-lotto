const { validator } = require('./utils');
const { FORMULA, ERROR_MESSAGE } = require('./constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validateLotto(numbers);
    this.#numbers = numbers.sort(FORMULA.COMPARE);
  }

  getNumbers() {
    return `[${this.#numbers.join(', ')}]`;
  }

  countNumberOfMatches(luckyNumbers) {
    let count = 0;
    this.#numbers.filter((number) => {
      if (luckyNumbers.includes(number)) {
        count += 1;
      }
    });
    return count;
  }

  isBonus(bonusNumber) {
    if (this.#numbers.includes(bonusNumber)) {
      return true;
    }
    return false;
  }

  validateLotto(numbers) {
    if (validator.isLengthError(numbers)) {
      throw new Error(ERROR_MESSAGE.LENGTH_OF_LOTTO);
    }
    if (validator.isDuplicate(numbers)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_OF_LOTTO);
    }
    if (validator.isDigitError(numbers)) {
      throw new Error(ERROR_MESSAGE.DIGIT_OF_LOTTO);
    }
    if (validator.isNotIntegers(numbers)) {
      throw new Error(ERROR_MESSAGE.INTEGER_OF_LOTTO);
    }
  }
}

module.exports = Lotto;
