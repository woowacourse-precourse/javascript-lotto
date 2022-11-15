const Validation = require('./Validation');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = this.sortNumber(numbers);
  }

  validate(numbers) {
    Validation.validateLottoNumber(numbers);
  }

  sortNumber(lotto) {
    return lotto.sort((a, b) => a - b);
  }
}

module.exports = Lotto;
