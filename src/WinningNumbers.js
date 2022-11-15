const checkValue = require("./errors/checkValidation");
const exitWithError = require("./errors/existError");
const { WINNING_NUMBER } = require("./errors/message");

class WinningNumbers {
  constructor(numbers) {
    this.validate(numbers);
    this.value = numbers;
  }

  validate(numbers) {
    const { errorMsg } = checkValue.numbers(numbers, WINNING_NUMBER);

    if (errorMsg) exitWithError(errorMsg);
  }
}

module.exports = WinningNumbers;
