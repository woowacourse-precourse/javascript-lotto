const checkValidation = require("./errors/checkValidation");
const existError = require("./errors/existError");
const { WINNING_NUMBER } = require("./errors/message");

class WinningNumbers {
  constructor(numbers) {
    this.validate(numbers);
    this.value = numbers;
  }
  validate(numbers) {
    const { errorMessage } = checkValidation.numbers(numbers, WINNING_NUMBER);
    if (errorMessage) existError(errorMessage);
  }
}
module.exports = WinningNumbers;
