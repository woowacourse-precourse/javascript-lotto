const { Validator } = require("../utils/Validator");

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

  #convertArgsStringToInt(number) {
    return +number;
  }
}

module.exports = Lotto;
