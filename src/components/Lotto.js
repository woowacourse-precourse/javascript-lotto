const { Console } = require('@woowacourse/mission-utils');
const { ERROR, NUMBER } = require('../data/constants');

const {
  isNotUnique,
  isMatchLength,
  isAllExceedRange,
} = require('../utils/validate');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (!isMatchLength(numbers, NUMBER.LENGTH_LOTTO)) {
      throw new Error(ERROR.LENGTH);
    }
    if (!isNotUnique(numbers)) throw new Error(ERROR.NOT_UNIQUE);
    if (!isAllExceedRange(numbers, NUMBER.START_LOTTO, NUMBER.END_LOTTO))
      throw new Error(ERROR.RANGE);
  }

  getLottoNum() {
    return this.#numbers;
  }

  print() {
    Console.print(this.#numbers);
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
