const Validate = require("./Validate");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    Validate.isLottoNumbersCount(numbers);
    Validate.isUniqueLottoNumbers(numbers);
    Validate.isLottoNumberRange(numbers);
  }

  getNumber() {
    return this.#numbers;
  }
}

module.exports = Lotto;
