const { isValidLottoNumbers } = require('./util/utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = [];
    this.validate(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }

  validate(numbers) {
    isValidLottoNumbers(numbers);
  }
}

// TODO: 추가 기능 구현

module.exports = Lotto;
