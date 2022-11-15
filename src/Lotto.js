const Validation = require("./Validation.js");
class Lotto {
  #numbers;

  constructor(numbers) {
    Validation.validLottoNumber(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers;
  }
  // TODO: 추가 기능 구현
}

module.exports = Lotto;
