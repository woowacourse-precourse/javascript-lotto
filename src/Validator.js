const { ERROR_MESSAGE, INPUT_MONEY_UNIT } = require('./Constant');

const LOTTO_LENGTH = 6;
const START_NUMBER = 1;
const END_NUMBER = 45;

class Validator {
  static validateInputMoney(inputMoney) {
    const input = Number(inputMoney);
    this.validateTypeNumber(input);
    this.validateUnitRemainder(input);
  }

  static validateUnitRemainder(input) {
    if (input % INPUT_MONEY_UNIT) {
      throw new Error(ERROR_MESSAGE.INPUT_MONEY);
    }
  }

  static validateInputNumbers(numbers) {
    this.validateLength(numbers);
    this.validateOverlapNumbers(numbers);
    numbers.forEach(number => {
      this.validateTypeNumber(number);
      this.validateRange(number);
    });
  }

  static validateOverlapNumbers(numbers) {
    if (new Set(numbers).size !== numbers.length)
      throw new Error(ERROR_MESSAGE.INPUT_OVERLAP);
  }

  static validateInputNumber(inputNumber) {
    this.validateTypeNumber(inputNumber);
    this.validateRange(inputNumber);
    return inputNumber;
  }

  static validateRange(number) {
    if (number < START_NUMBER || number > END_NUMBER)
      throw new Error(ERROR_MESSAGE.INPUT_RANGE);
  }

  static validateLength(numbers) {
    if (numbers.length !== LOTTO_LENGTH)
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBER);
  }

  static validateTypeNumber(number) {
    if (Number.isNaN(number)) throw new Error(ERROR_MESSAGE.INPUT_TYPE_ERROR);
  }

  static validateOverLapWithWinningNumbers(inputBonusNumber, winningNumbers) {
    if (winningNumbers.includes(Number(inputBonusNumber))) {
      throw new Error(ERROR_MESSAGE.INPUT_MONEY);
    }
  }
}

module.exports = Validator;
