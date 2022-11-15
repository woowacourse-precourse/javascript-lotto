const {
  isSixLength,
  isRangePrize,
  isOverlapPrize,
} = require('./libs/Validations');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    isSixLength(numbers);
    isRangePrize(numbers);
    isOverlapPrize(numbers);
  }

  // TODO: 추가 기능 구현
  getPrizeNumber() {
    return this.#numbers;
  }
}

module.exports = Lotto;
