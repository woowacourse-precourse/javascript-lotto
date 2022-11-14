const messages = require("../constants/messages");

class Lotto {
  #numbers;

  constructor(numbers, controller) {
    this.controller = controller;
    this.validate(numbers);
    this.#numbers = numbers;
  }

  isInputSplitByComma(lotto) {
    if (lotto.length !== 6) {
      throw new Error(messages.WINNING_NUMBER_ERROR_COMMA_NUMBER_MESSAGE);
    }

    for (const singleElement of lotto) {
      if (isNaN(singleElement)) {
        throw new Error(messages.WINNING_NUMBER_ERROR_COMMA_NUMBER_MESSAGE);
      }
    }
  }

  isSingleLottoElementInRange(lotto) {
    for (const singleElement of lotto) {
      if (1 > singleElement || singleElement > 45) {
        throw new Error(messages.WINNING_NUMBER_ERROR_RANGE_MESSAGE);
      }
    }
  }

  isLottoUnique(lotto) {
    const numbersSet = new Set(lotto);
    if (numbersSet.size !== 6) {
      throw new Error(messages.WINNING_NUMBER_ERROR_UNIQUE_NUMBERS_MESSAGE);
    }
  }

  validate(userInput) {
    const winningSplitNumber = userInput.split(",").map(Number);
    this.isInputSplitByComma(winningSplitNumber);
    this.isSingleLottoElementInRange(winningSplitNumber);
    this.isLottoUnique(winningSplitNumber);
  }

  getLottoNumbers() {
    return this.#numbers;
  }

  setLottoNumbers() {
    const winningSplitNumber = this.getLottoNumbers().split(",")
      .map(Number);
    this.controller.setLottoToUse(winningSplitNumber);
    this.controller.getBonusNumberFromUser();
  }
}

module.exports = Lotto;
