const MissionUtils = require('@woowacourse/mission-utils');
const { ERROR_MESSAGE } = require('./constants.js');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.LENGTH);
    }
    Lotto.validateNumberArrayDuplication(numbers);
    numbers.forEach((number) => {
      Lotto.validateLottoNumber(number);
    });
  }

  // TODO: 추가 기능 구현
  getLottoNumbers() {
    return this.#numbers;
  }

  static validateLottoNumber(number) {
    if (typeof number !== 'number' || isNaN(number))
      throw new Error(ERROR_MESSAGE.TYPE);
    if (number < 1 || number > 45) throw new Error(ERROR_MESSAGE.RANGE);
  }

  static validateNumberArrayDuplication(array) {
    const arrayToSet = new Set(array);
    if (array.length !== arrayToSet.size)
      throw new Error(ERROR_MESSAGE.DUPLICATE);
  }

  printLotto() {
    MissionUtils.Console.print(`[${this.ascendingOrderNumbers().join(', ')}]`);
  }

  ascendingOrderNumbers() {
    return this.#numbers.sort((a, b) => a - b);
  }
}

module.exports = Lotto;
