const MissionUtils = require("@woowacourse/mission-utils");
const messages = require("./constants/messages.js");
const terms = require("./constants/terms");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    try {
      this.checkNumbersLength(numbers);
      this.checkSameNumber(numbers);
      this.checkNotNumber(numbers);
      this.checkNumberRange(numbers);
    } catch (e) {
      MissionUtils.Console.print(e);
      MissionUtils.Console.close();
    }
  }

  checkNumbersLength(numbers) {
    if (numbers.length !== messages.NUMBERS_LENGTH) {
      throw new Error(messages.TOTAL_NUMBER_ERROR);
    }
  }
  checkSameNumber(numbers) {
    if (set(numbers).length !== messages.NUMBERS_LENGTH) {
      throw new Error(messages.SAME_NUMBER_ERROR);
    }
  }
  checkNotNumber(numbers) {
    if (numbers.every((number) => !isNaN(number))) {
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

a = new Lotto([1, 2, 3, 4]);
module.exports = Lotto;
