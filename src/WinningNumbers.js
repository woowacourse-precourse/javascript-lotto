const checkValidation = require("./errors/checkValidation");
const existError = require("./errors/existError");

class WinningNumbers {
  constructor(numbers) {
    this.validate(numbers);
    this.value = numbers;
  }
  validate(numbers) {
    const { errorMessage } = checkValidation.numbers(numbers, "당첨번호");
    if (errorMessage) existError(errorMessage);
  }
}
module.exports = WinningNumbers;
