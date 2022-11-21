const LottoValidation = require('./validation/LottoValidation');

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.validate(numbers);
    this.#numbers = numbers;
  }

  static validate(numbers) {
    LottoValidation.isInteger(numbers);
    LottoValidation.isOutOfRange(numbers);
    LottoValidation.hasLengthOfSix(numbers);
    LottoValidation.hasOverlapNumbers(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }
  // TODO: 추가 기능 구현
}

module.exports = Lotto;
