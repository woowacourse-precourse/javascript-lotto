const { Console } = require('@woowacourse/mission-utils');
const { LOTTO_CONSTANT } = require('./utils/constants');
const Validator = require('./Validator');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = this.initNumbers(numbers);
    this.divisions = new Map([
      [3, 'fifth'],
      [4, 'forth'],
      [5, 'third'],
      [6, 'first'],
    ]);
  }

  validate(numbers) {
    Validator.checkNumberListNotDuplicated(numbers) &&
      Validator.checkNumberListInRange(numbers) &&
      Validator.checkLottoNumberListLength(numbers);
  }

  initNumbers(numbers) {
    return [...numbers].sort((a, b) => a - b);
  }

  print() {
    Console.print(`[${this.#numbers.join(', ')}]`);
  }

  getMatchDivision(winningNumbers, bonusNumber) {
    const sameNumberCount = this.getSameNumberCount(winningNumbers);
    const match = this.divisions.get(sameNumberCount);

    if (match === undefined) {
      return 'none';
    }

    if (match === 'third' && this.#numbers.includes(bonusNumber)) {
      return 'second';
    }

    return match;
  }

  getSameNumberCount(winningNumbers) {
    return LOTTO_CONSTANT.numbersLength * 2 - new Set([...winningNumbers, ...this.#numbers]).size;
  }
}

module.exports = Lotto;
