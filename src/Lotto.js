const { MissionUtils } = require("@woowacourse/mission-utils");
const { WIN_NUM_ERROR_MESSAGE } = require("./constant/message");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  isDuplicated(numbers) {
    const setNumbers = new Set(numbers);
    if (setNumbers.length === numbers.length) {
      return true;
    }
    return false;
  }
  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(WIN_NUM_ERROR_MESSAGE.NOT_SIX_NUMBERS);
    }
    if (numbers.includes(0)) {
      throw new Error(WIN_NUM_ERROR_MESSAGE.INCLUED_SPACE_ZERO);
    }
    if (!this.isDuplicated(numbers)) {
      throw new Error(WIN_NUM_ERROR_MESSAGE.DUPLICATED_NUMBERS);
    }
  }
}

module.exports = Lotto;
