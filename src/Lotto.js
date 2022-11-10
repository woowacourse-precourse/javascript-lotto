const { LottoValidator } = require('./Lotto/Lotto.validator');

class Lotto {
  #numbers = [];

  constructor(numbers) {
    LottoValidator.checkLotto(this);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
