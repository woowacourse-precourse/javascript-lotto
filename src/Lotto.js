const { Console, Random } = require("@woowacourse/mission-utils");
const { validator } = require("./utils");
const {FORMULA, MESSAGE, ERROR_MESSAGE} = require('./constants')


class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers.sort(FORMULA.COMPARE);
  }

  validate(numbers) {
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

  // TODO: 추가 기능 구현
  getNumbers() {
    return `[${this.#numbers.join(", ")}]`;
  }

  countNumberOfMatches(luckyNumbers) {
    let count = 0
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
}

module.exports = Lotto;
