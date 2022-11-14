const messages = require("../constants/messages");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  isInputSplitByComma(userSplitInput) {
    if (userSplitInput.length !== 6) {
      throw new Error(messages.WINNING_NUMBER_ERROR_COMMA_NUMBER_MESSAGE);
    }

    for (const singleElement of userSplitInput) {
      if (isNaN(singleElement)) {
        throw new Error(messages.WINNING_NUMBER_ERROR_COMMA_NUMBER_MESSAGE);
      }
    }
  }

  isSingleLottoElementInRange(userSplitInput) {
    for (const singleElement of userSplitInput) {
      if (1 > singleElement || singleElement > 45) {
        throw new Error(messages.WINNING_NUMBER_ERROR_RANGE_MESSAGE);
      }
    }
  }

  isLottoUnique(userSplitInput) {
    const numbersSet = new Set(userSplitInput);
    if (numbersSet.size !== 6) {
      throw new Error(messages.WINNING_NUMBER_ERROR_UNIQUE_NUMBERS_MESSAGE);
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
