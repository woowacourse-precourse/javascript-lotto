const LottoValidator = require('./LottoDto/Lotto.validator');

class Lotto {
  #numbers = [];

  constructor(numbers) {
    LottoValidator.checkLotto(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
