const { Console } = require('@woowacourse/mission-utils');
const checkValue = require('./libs/checkValue');
const exitWithError = require('./libs/exitWithError');
const { LOTTO_NUMBER, PLACE } = require('./libs/const');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const { errorMsg } = checkValue.numbers(numbers, LOTTO_NUMBER);

    if (errorMsg) exitWithError(errorMsg);
  }

  printNumbers() {
    this.sortNumbers();

    Console.print(`[${this.#numbers.join(', ')}]`);
  }

  sortNumbers() {
    this.#numbers.sort((a, b) => a - b);
  }

  getRank(winningNumbers, bonusNumber) {
    let count = 0;

    this.#numbers.forEach((number) => {
      if (winningNumbers.includes(number)) count += 1;
    });

    if (count === 6) return PLACE.FIRST;

    if (count === 5 && this.#numbers.includes(bonusNumber)) return PLACE.SECOND;

    return 8 - count;
  }
}

module.exports = Lotto;
