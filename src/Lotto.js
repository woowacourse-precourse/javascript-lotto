const { Console } = require('@woowacourse/mission-utils');
const Validator = require('./Validator');

class Lotto {
  #numbers;

  constructor(numbers) {
    Validator.validateLottoNumbers(numbers);
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

  getNumbersString() {
    return `[${this.#numbers.join(', ')}]`;
  }
}

module.exports = Lotto;
