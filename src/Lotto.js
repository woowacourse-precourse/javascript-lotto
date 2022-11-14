const Validator = require('./Validator');
const { Console } = require('@woowacourse/mission-utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    Validator.validateNumbers(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  getNumberOfMatch(winningNumbers) {
    const matches = this.#numbers.filter((number) =>
      winningNumbers.includes(number)
    );
    return matches.length;
  }

  hasNumber(number) {
    return this.#numbers.includes(number);
  }

  printNumbers() {
    Console.print(`[${this.#numbers.join(', ')}]`);
  }
}

module.exports = Lotto;
