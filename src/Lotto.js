const { REGEX, ERROR } = require('./constants');

class Lotto {
  #numbers;

  constructor(inputArr) {
    this.#numbers = this.validate(inputArr);
  }

  validate(inputArr) {
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
