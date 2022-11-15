const Constant = require("./components/Constant");
const NumberValidator = require("./components/NumberValidator");

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

    const numberValidator = new NumberValidator(numberArray);
    if (numberValidator.confirm(numberArray)) {
      throw new Error(Constant.WRONG_NUMBER_ERROR);
    }

    if (this.duplicateWinningNumber(numberArray)) {
      throw new Error(Constant.DUPLICATE_WINNING_NUMBER_ERROR);
    }
  }

  duplicateWinningNumber(numberArray) {
    const allNumbers = numberArray.concat(this.winningNumber);
    return [...new Set(allNumbers)].length !== 7;
  }
}

module.exports = BonusNumber;
