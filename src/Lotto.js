const { LOTTO } = require('./constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.validate(numbers);
    this.#numbers = numbers;
    return this;
  }

  static validate(numbers) {
    if (numbers.length !== LOTTO.NUMBER_COUNT) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (!numbers.every(isInRange(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER))) {
      throw new Error('[ERROR] 로또 번호는 1부터 45까지입니다.');
    }
    if (!isUnique(numbers)) {
      throw new Error('[ERROR] 로또 번호는 중복되지 않아야 합니다.');
    }
    if (!numbers.every(isNumber)) {
      throw new Error('[ERROR] 로또 번호는 숫자여야 합니다.');
    }
  }

  toString() {
    return `[${this.#numbers.join(', ')}]`;
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
