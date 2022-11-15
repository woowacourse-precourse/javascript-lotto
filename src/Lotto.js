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

  getCountMatches(winningNumber, bonusNumber) {
    const countMatches =
      this.#numbers.filter((value) => winningNumber.includes(value)).length +
      (this.#numbers.includes(bonusNumber) ? 0.5 : 0);

    return countMatches;
  }
}

module.exports = Lotto;
