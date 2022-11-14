const { Random } = require('@woowacourse/mission-utils');
const { ERROR_MESSAGE, INPUT_MONEY_UNIT, REWARD } = require('./Constant');

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

  static setRandomNumbers() {
    return this.sortNumbers(
      Random.pickUniqueNumbersInRange(START_NUMBER, END_NUMBER, LOTTO_LENGTH),
    );
  }

  static sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  static splitNumbers(inputNumbers) {
    return inputNumbers.split(',').map(number => +number);
  }

  static getRateOfReturn(result, lottoCount) {
    let reward = 0;

    const resultArray = Object.entries(result);

    for (let i = 0; i < resultArray.length; i += 1) {
      reward += REWARD[resultArray[i][0]] * resultArray[i][1];
    }

    return Math.round((reward / (lottoCount * 1000)) * 10000) / 100;
  }

  static getRewardKey() {
    return Object.keys(REWARD).sort((a, b) => {
      return Number(a[0]) - Number(b[0]);
    });
  }
}

module.exports = Function;
