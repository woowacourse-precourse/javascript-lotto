const Util = require('./Util');
const { LOTTO, ERROR_MESSAGE, } = require('./domain/constant');
const { Console, } = require('@woowacourse/mission-utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (!Util.hasNElements(numbers, LOTTO.LENGTH)) {
      throw new Error(ERROR_MESSAGE.INVALID_LENGTH_LOTTO);
    }
    if (!Util.isBetween(numbers, LOTTO.START, LOTTO.END)) {
      throw new Error(ERROR_MESSAGE.OUT_OF_RANGE_LOTTO);
    }
    if (Util.hasDuplicateElements(numbers)) {
      throw new Error(ERROR_MESSAGE.HAS_DUPLICATE_NUMBERS);
    }
  }

  printLottoNumbers() {
    Console.print(`[${this.#numbers.join(', ')}]`);
  }

  getMatchCount(winningNumbers) {
    let matchCount = 0;
    winningNumbers.forEach((num) => {
      if (this.#numbers.includes(num)) matchCount += 1;
    });
    return matchCount;
  }

  hasBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }
}

module.exports = Lotto;
