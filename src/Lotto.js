const LottoValidation = require("./Validation/LottoValidation");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    LottoValidation.hasSixNumbers(numbers);
    LottoValidation.isNotNumber(numbers);
    LottoValidation.checkRange(numbers);
    LottoValidation.isUniqueNumber(numbers);
    LottoValidation.isInteger(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
