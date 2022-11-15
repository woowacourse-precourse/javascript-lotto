const Validation = require('../utils/Validation');

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.validate(numbers);
    this.#numbers = this.sortNumbersInAscendingOrder(numbers);
  }

  static validate(numbers) {
    numbers.forEach((number) => Validation.checkType(number));
    Validation.checkLength(numbers);
    numbers.forEach((number) => Validation.checkRange(number));
    Validation.checkRepeatedNum(numbers);
  }

  sortNumbersInAscendingOrder(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  getLottoNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
