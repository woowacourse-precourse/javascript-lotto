const { Console } = require('@woowacourse/mission-utils');
const { ERROR } = require('../data/constants');
const { isNotUnique, isMatchLength } = require('../utils/validate');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (!isMatchLength(numbers, 6)) {
      throw new Error(ERROR.LENGTH);
    }
    if (!isNotUnique(numbers)) throw new Error(ERROR.NOT_UNIQUE);
  }

  print() {
    Console.print(this.#numbers);
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
