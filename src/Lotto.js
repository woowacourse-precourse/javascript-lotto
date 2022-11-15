const { LOTTO_ERROR_MESSAGE, VARIABLE_LOTTO } = require('../utils/constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== VARIABLE_LOTTO.len) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    this.#validateOverlap(numbers);
  }

  getNumber() {
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
  #validateOverlap(numbers) {
    if (numbers.length !== new Set(numbers).size) {
      throw new Error(LOTTO_ERROR_MESSAGE.overlap);
    }

    return this;
  }
}

module.exports = Lotto;
