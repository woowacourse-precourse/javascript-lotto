const { checkLottoNumbers } = require("./Validation");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    checkLottoNumbers(numbers);
  }

  getLottoNumbers() {
    return this.#numbers;
  }

  compareWinningNumbers(winningNumbers) {
    return winningNumbers.filter((number) => this.#numbers.includes(number))
      .length;
  }

  compareBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }
}

module.exports = Lotto;
