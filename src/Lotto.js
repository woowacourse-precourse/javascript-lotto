const checkLottoValidation = require('./checkValid/checkLottoValidation');
class Lotto {
  #numbers;
  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    checkLottoValidation(numbers);
  }

  // TODO: 추가 기능 구현
}
module.exports = Lotto;
