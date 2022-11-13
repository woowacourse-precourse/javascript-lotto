const lottoException = require('../src/utils/lottoException');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate() {
    lottoException.isNotSix(numbers);
    lottoException.isOutOfRange(numbers);
    lottoException.includeNotNumber(numbers);
    lottoException.isDuplicated(numbers);
  }

  // TODO: 추가 기능 구현
  
}

module.exports = Lotto;
