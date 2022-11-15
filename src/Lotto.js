const LottoNumberUtils = require("./LottoNumberUtil");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  validate(numbers) {
    LottoNumberUtils.validateLength(numbers);
    LottoNumberUtils.validateDuplication(numbers);
    numbers.forEach((value) => LottoNumberUtils.validateRange(value));
  }

  getNumberString() {
    return "[" + this.#numbers.join(", ") + "]";
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
