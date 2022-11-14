const { Console } = require("@woowacourse/mission-utils");
const { CONSTANTS } = require("./constant/constants");
const { LOTTO_NUM_ERROR_MESSAGE } = require("./constant/message");

class Lotto {
  #numbers;

  constructor(numbers, bonusNumber) {
    this.#numbers = numbers;
    this.validate(numbers);
  }

  isDuplicated(numbers) {
    const setNumbers = new Set(numbers);
    const setArray = [...setNumbers];
    return numbers.length !== setArray.length;
  }
  lottoNumberRange(element) {
    return (
      CONSTANTS.LOTTO_MINIMUM_NUMBER <= element &&
      CONSTANTS.LOTTO_MAXIMUM_NUMBER >= element
    );
  }
  isValidRange(numbers) {
    const validNumbers = numbers.filter((element) =>
      this.lottoNumberRange(element)
    );
    return validNumbers.length !== numbers.length;
  }
  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(LOTTO_NUM_ERROR_MESSAGE.NOT_SIX_NUMBERS);
    }
    if (this.isDuplicated(numbers)) {
      throw new Error(LOTTO_NUM_ERROR_MESSAGE.DUPLICATED_NUMBERS);
    }
    if (this.isValidRange(numbers)) {
      throw new Error(LOTTO_NUM_ERROR_MESSAGE.NOT_IN_RANGE);
    }
  }
}

module.exports = Lotto;
