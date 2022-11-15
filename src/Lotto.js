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
      Lotto.handleError(ERROR_MESSAGE.LENGTH);
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
      Lotto.handleError(ERROR_MESSAGE.TYPE);
    if (number < 1 || number > 45) Lotto.handleError(ERROR_MESSAGE.RANGE);
  }

  static validateNumberArrayDuplication(array) {
    const arrayToSet = new Set(array);
    if (array.length !== arrayToSet.size)
      Lotto.handleError(ERROR_MESSAGE.DUPLICATE);
  }

  printLotto() {
    MissionUtils.Console.print(`[${this.ascendingOrderNumbers().join(', ')}]`);
  }

  ascendingOrderNumbers() {
    return this.#numbers.sort((a, b) => a - b);
  }

  static handleError(message) {
    MissionUtils.Console.close();
    throw new Error(message);
  }
}

module.exports = Lotto;
