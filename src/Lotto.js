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
}

module.exports = Lotto;
