const lottoException = require('../src/utils/lottoException');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    lottoException.isNotSix(numbers);
    lottoException.isOutOfRange(numbers);
    lottoException.includeNotNumber(numbers);
    lottoException.isDuplicated(numbers);
  }

  // TODO: 추가 기능 구현
  get numbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
