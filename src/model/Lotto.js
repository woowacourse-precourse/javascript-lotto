const messages = require("../constants/messages");

class Lotto {
  #numbers;

  constructor(numbers, controller) {
    this.controller = controller;
    this.validate(numbers);
    this.#numbers = numbers;
  }

  isArraySplitByComma(numbersArray) {
    if (numbersArray.length !== 6) {
      throw new Error(messages.WINNING_NUMBER_ERROR_COMMA_NUMBER_MESSAGE);
    }

    for (const singleElement of numbersArray) {
      if (isNaN(singleElement)) {
        throw new Error(messages.WINNING_NUMBER_ERROR_COMMA_NUMBER_MESSAGE);
      }
    }
  }

  isArrayInRange(numbersArray) {
    for (const singleElement of numbersArray) {
      if (1 > singleElement || singleElement > 45) {
        throw new Error(messages.WINNING_NUMBER_ERROR_RANGE_MESSAGE);
      }
    }
  }

  isArrayUnique(numbersArray) {
    const numbersSet = new Set(numbersArray);
    if (numbersSet.size !== 6) {
      throw new Error(messages.WINNING_NUMBER_ERROR_UNIQUE_NUMBERS_MESSAGE);
    }
  }

  validate(userInput) {
    const winningSplitNumber = userInput.split(",").map(Number);
    this.isArraySplitByComma(winningSplitNumber);
    this.isArrayInRange(winningSplitNumber);
    this.isArrayUnique(winningSplitNumber);
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
