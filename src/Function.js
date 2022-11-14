const { Console, Random } = require('@woowacourse/mission-utils');
const { ERROR_MESSAGE, INPUT_MONEY_UNIT, MESSAGE } = require('./Constant');

const LOTTO_LENGTH = 6;
const START_NUMBER = 1;
const END_NUMBER = 45;

class Function {
  static validateInputMoney(inputMoney) {
    const input = Number(inputMoney);
    if (Number.isNaN(input) || Number(input) % INPUT_MONEY_UNIT) {
      throw new Error(ERROR_MESSAGE.INPUT_MONEY);
    }
  }

  static validateInputNumbers(inputNumbers) {
    return inputNumbers;
  }

  static validateInputNumber(inputNumber) {
    return inputNumber;
  }

  static getLottoNumber(inputMoney) {
    const lottoNumber = Number(inputMoney) / INPUT_MONEY_UNIT;
    Console.print(MESSAGE.PRINTLOTTONUMBER(lottoNumber));
    return lottoNumber;
  }

  static setRandomNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(
      START_NUMBER,
      END_NUMBER,
      LOTTO_LENGTH,
    );
    return this.sortNumbers(numbers);
  }

  static sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }
}

module.exports = Function;
