const MissionUtils = require("@woowacourse/mission-utils");
const messages = require("./constants/messages.js");
const terms = require("./constants/terms");

class UserLotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = this.validate(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }

  validate(numbers) {
    this.checkNumbersLength(numbers);
    this.checkSameNumber(numbers);
    this.checkNotNumber(numbers);
    this.checkNumberRange(numbers);
    return numbers;
  }

  checkNumbersLength(numbers) {
    if (numbers.length !== terms.NUMBERS_LENGTH) {
      MissionUtils.Console.close();
      throw new Error(messages.TOTAL_NUMBER_ERROR);
    }
  }
  checkSameNumber(numbers) {
    const numberSet = new Set(numbers);
    if (numberSet.length !== messages.NUMBERS_LENGTH) {
      throw new Error(messages.SAME_NUMBER_ERROR);
    }
  }
  checkNotNumber(numbers) {
    if (numbers.every((number) => isNaN(number))) {
      throw new Error(messages.NOT_A_NUMBER_ERROR);
    }
  }
  checkNumberRange(numbers) {
    if (
      !numbers.every(
        (number) =>
          terms.MIN_NUMBER_RANGE <= number && number <= terms.MAX_NUMBER_RANGE
      )
    ) {
      throw new Error(messages.NUMBER_RANGE_ERROR);
    }
  }
}

module.exports = UserLotto;
