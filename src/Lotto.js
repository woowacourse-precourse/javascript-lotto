const { Console, Random } = require("@woowacourse/mission-utils");
const { isLengthError, isDuplicate } = require("./utils");
const {MESSAGE, ERROR_MESSAGE} = require('./constants')


class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers.sort((comp1, comp2) => comp1 - comp2);
  }

  validate(numbers) {
    if (isLengthError(numbers)) {
      throw new Error(ERROR_MESSAGE.LENGTH_OF_LOTTO);
    }

    if (isDuplicate(numbers)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_OF_LOTTO);
    }
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
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
