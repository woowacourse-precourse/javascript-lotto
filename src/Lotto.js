/* eslint-disable class-methods-use-this */
// const TicketBox = require('./TicketBox');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 숫자를 중복없이 입력하여 주십시오.');
    }
  }

  get numbers() {
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
