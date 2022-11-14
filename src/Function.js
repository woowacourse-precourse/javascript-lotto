const { Random } = require('@woowacourse/mission-utils');
const { ERROR_MESSAGE, INPUT_MONEY_UNIT } = require('./Constant');

const LOTTO_LENGTH = 6;
const START_NUMBER = 1;
const END_NUMBER = 45;

class Function {
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
    numbers.forEach(number => {
      this.validateTypeNumber(number);
    });
  }

  static validateInputNumber(inputNumber) {
    this.validateTypeNumber(inputNumber);
    return inputNumber;
  }

  static validateTypeNumber(number) {
    if (Number.isNaN(number)) throw new Error(ERROR_MESSAGE.INPUT_TYPE_ERROR);
  }

  static setRandomNumbers() {
    return this.sortNumbers(
      Random.pickUniqueNumbersInRange(START_NUMBER, END_NUMBER, LOTTO_LENGTH),
    );
  }

  static sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }
}

module.exports = Function;
