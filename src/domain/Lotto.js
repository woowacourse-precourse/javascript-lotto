const { LottoValidator } = require('../validators');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }

  #validate(numbers) {
    LottoValidator.validateLottoNumbers(numbers);
  }
}

module.exports = Lotto;
