const { Console } = require('@woowacourse/mission-utils');
const { ERROR_MESSAGE } = require('./Constant');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  // eslint-disable-next-line
  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBER);
    }
  }

  print() {
    Console.print(this.#numbers);
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
