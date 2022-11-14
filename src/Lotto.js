import { ERROR_MESSAGES } from './constants';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.CHECK_LENGTH);
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
