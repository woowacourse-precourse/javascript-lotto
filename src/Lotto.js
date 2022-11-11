const Exception = require("./error/exception");
const LottoNumbersError = require("./error/lotto");

class Lotto {
  #numbers;
  #exception;

  constructor(numbers) {
    this.#numbers = numbers;
    this.#exception = new Exception();
  }

  validate() {
    this.#exception.isAllow(new LottoNumbersError(this.#numbers));
  }
}

module.exports = Lotto;
