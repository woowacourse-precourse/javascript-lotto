const LottoNumbersValidator = require('../LottoNumbersValidator/LottoNumbersValidator');
const LottoResult = require('../LottoResult/LottoResult');

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.#validate(numbers);
    this.#numbers = numbers;
  }

  static #validate(numbers) {
    LottoNumbersValidator.execute(numbers);
  }

  compareTo(winningNumbers, bonusNumber) {
    return new LottoResult(
      this.#getSameNumberCount(winningNumbers),
      this.#hasBonusNumber(bonusNumber)
    );
  }

  #getSameNumberCount(winningNumbers) {
    return winningNumbers.filter((winningNumber) => this.#numbers.includes(winningNumber)).length;
  }

  #hasBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }
}

module.exports = Lotto;
