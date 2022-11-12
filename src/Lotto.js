const { checkLottoRange, checkDuplicate, checkLength } = require('./LottoValidation');

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.validate(numbers);
    this.#numbers = numbers;
  }

  static validate(numbers) {
    checkLottoRange(numbers);
    checkLength(numbers);
    checkDuplicate(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
