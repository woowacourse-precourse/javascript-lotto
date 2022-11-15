const { Validator } = require("./utils/Validator");

class Lotto {
  #winningNumbers;
  constructor(numbers) {
    this.#validate(numbers);
    this.#winningNumbers = numbers;
  }

  getConvertedLottoNumber() {
    return this.#winningNumbers;
  }

  #validate(numbers) {
    Validator.isWinningNumberValid(numbers);
  }
}

module.exports = Lotto;
