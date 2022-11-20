const { Console } = require('@woowacourse/mission-utils');
const {
  validateLength,
  validateDuplicate,
  validateNumberRange,
} = require('./util/validate');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    validateLength(numbers);
    validateDuplicate(numbers);
    validateNumberRange(numbers);
  }

  print() {
    Console.print('[' + this.#numbers.join(', ') + ']');
  }

  Lotto() {
    return this.#numbers;
  }
}

module.exports = Lotto;
