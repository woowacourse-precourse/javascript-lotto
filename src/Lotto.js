/* eslint-disable no-shadow */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable class-methods-use-this */

const { TICKET_NUMBER } = require('./Constant');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const notInRange = (numbers) =>
      numbers.filter(
        (number) =>
          number < TICKET_NUMBER.RANGE_START ||
          number > TICKET_NUMBER.RANGE_END,
      ).length;

    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 숫자를 중복없이 입력하여 주십시오.');
    }
    if (notInRange(numbers)) {
      throw new Error('[ERROR] 1~45 사이 숫자를 입력하여 주십시오.');
    }
  }

  get numbers() {
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
