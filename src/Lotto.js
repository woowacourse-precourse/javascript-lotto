const LottoValidator = require('./Lotto.validator');

class Lotto {
  #numbers;

  constructor(numbers) {
    LottoValidator.checkLotto(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  get numbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
