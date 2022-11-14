const Validation = require("./validation");

class Lotto {
  #numbers;

  constructor(numbers) {
    Validation.checkLottoNumber(numbers);
    this.#numbers = numbers;
  }

  getLottoNumber() {
    return this.#numbers;
  }
}

module.exports = Lotto;
