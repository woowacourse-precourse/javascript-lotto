const Validation = require("./validation");

class Lotto {
  #numbers;

  constructor(numbers) {
    Validation.checkLottoNumber(numbers);
    this.#numbers = numbers;
  }
}

module.exports = Lotto;
