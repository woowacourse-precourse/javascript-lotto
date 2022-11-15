const { WINNING_NUMBER_MESSAGE } = require("../constants/messages");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  isInputSplitByComma(userSplitInput) {
    if (userSplitInput.length !== 6) {
      throw new Error(WINNING_NUMBER_MESSAGE.COMMA_NUMBER_ERROR);
    }

    for (const singleElement of userSplitInput) {
      if (!/^\d+$/.test(singleElement.toString())) {
        throw new Error(WINNING_NUMBER_MESSAGE.COMMA_NUMBER_ERROR);
      }
    }
  }

  isSingleLottoElementInRange(userSplitInput) {
    for (const singleElement of userSplitInput) {
      if (1 > singleElement || singleElement > 45) {
        throw new Error(WINNING_NUMBER_MESSAGE.RANGE_ERROR);
      }
    }
  }

  isLottoUnique(userSplitInput) {
    const numbersSet = new Set(userSplitInput);
    if (numbersSet.size !== 6) {
      throw new Error(WINNING_NUMBER_MESSAGE.UNIQUE_ERROR);
    }
  }

  validate(userSplitInput) {
    this.isInputSplitByComma(userSplitInput);
    this.isSingleLottoElementInRange(userSplitInput);
    this.isLottoUnique(userSplitInput);
  }

  getLottoNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
