const { REGEX, ERROR } = require('./constants');

class Lotto {
  #numbers;

  constructor(inputStr) {
    this.#numbers = this.validate(inputStr);
  }

  validate(inputStr) {
    if (!REGEX.WINNING_NUMBER.test(inputStr)) {
      throw new Error(ERROR.ENTER_VALID_WINNING_NUMBER);
    }

    const inputArr = inputStr.split(',').map(Number);
    const inputSet = new Set(inputArr);
    if (inputSet.size !== 6) {
      throw new Error(ERROR.ENTER_WITHOUT_REPETITION);
    }

    return inputArr;
  }

  isBonusValid(number) {
    return !this.#numbers.includes(number);
  }

  compare(lotto) {
    let count = 0;
    lotto.forEach((number) => {
      if (this.#numbers.includes(number)) count += 1;
    });

    return count;
  }
}

module.exports = Lotto;
