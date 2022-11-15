const Validator = require('./utils/Validator');
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.Validator = new Validator();
  }

  validateLotto(numbers) {
    if (
      this.Validator.isNumber(numbers) !== Error &&
      this.Validator.isSix(numbers) !== Error &&
      this.Validator.isUnique(numbers) !== Error &&
      this.Validator.isValidRange(numbers) !== Error
    )
      return true;
  }
  // TODO: 추가 기능 구현
}

module.exports = Lotto;
