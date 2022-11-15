const checkValue = require('./libs/checkValue');
const exitWithError = require('./libs/exitWithError');
const { WINNING_NUMBER } = require('./libs/const');

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
