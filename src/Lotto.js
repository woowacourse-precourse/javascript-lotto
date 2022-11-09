const lottoValidation = require('./validation/lottoValidation');
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    lottoValidation(numbers);
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
