const Validation = require('../utils/Validation');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = this.sortNumbersInAscendingOrder(numbers);
  }

  validate(numbers) {
    numbers.forEach((number) => Validation.isNumber(number));
    Validation.hasSixLength(numbers);
    numbers.forEach((number) => Validation.beInRange(number));
    Validation.hasNoRepeatedNum(numbers);
  }

  sortNumbersInAscendingOrder(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  getLottoNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
