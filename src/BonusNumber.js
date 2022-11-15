const Constant = require("./components/Constant");

class BonusNumber {
  #numbers;

  constructor(numbers, winningNumber) {
    this.#numbers = numbers;
    this.numberArray = numbers.split(",");
    this.winningNumber = winningNumber;
    this.validate(this.numberArray);
  }

  validate(numberArray) {
    if (numberArray.length > 1) {
      throw new Error(Constant.NUMBER_LENGTH_ERROR);
    }

    if (this.isWrongRange(numberArray)) {
      throw new Error(Constant.WRONG_NUMBER_ERROR);
    }

    if (this.isNotNumber(numberArray)) {
      throw new Error(Constant.WRONG_NUMBER_ERROR);
    }

    if (this.duplicateWinningNumber(numberArray)) {
      throw new Error(Constant.DUPLICATE_WINNING_NUMBER_ERROR);
    }
  }

  isWrongRange(numberArray) {
    return numberArray.find(this.checkRange);
  }

  checkRange(number) {
    return number < 1 || number > 45;
  }

  isNotNumber(numberArray) {
    return numberArray.find(this.checkNumber);
  }

  checkNumber(number) {
    return !Number(number);
  }

  duplicateWinningNumber(numberArray) {
    const allNumbers = numberArray.concat(this.winningNumber);
    return [...new Set(allNumbers)].length !== 7;
  }
}

module.exports = BonusNumber;
