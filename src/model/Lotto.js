const messages = require("../constants/messages");

class Lotto {
  #numbers;

  constructor(controller, numbers) {
    this.controller = controller;
    this.validate(numbers);
    this.#numbers = numbers;
    this.bonusNumber = null;
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

  validate(numbers) {
    if (typeof numbers !== "undefined") {
      this.isArraySplitByComma(numbers);
      this.isArrayInRange(numbers);
      this.isArrayUnique(numbers);
    }
  }

  getLottoNumbers() {
    return this.#numbers;
  }

  setLottoNumbers(winningNumber) {
    const winningNumberArray = winningNumber.split(",").map(Number);
    this.validate(winningNumberArray);
    this.#numbers = winningNumberArray;
    this.controller.getBonusNumberFromUser();
  }

  validateBonusNumber(bonusNumber) {
    if (isNaN(bonusNumber)) {
      throw new Error(messages.BONUS_NUMBER_ERROR_MESSAGE);
    }
    if (1 > bonusNumber || bonusNumber > 45) {
      throw new Error(messages.BONUS_NUMBER_ERROR_MESSAGE);
    }
  }

  getBonusNumber() {
    return this.bonusNumber;
  }

  setBonusNumberFromUser(userInput) {
    const bonusNumber = Number(userInput);
    this.validateBonusNumber(bonusNumber);
    this.bonusNumber = bonusNumber;
    this.controller.getStatistics();
  }
}

module.exports = Lotto;
