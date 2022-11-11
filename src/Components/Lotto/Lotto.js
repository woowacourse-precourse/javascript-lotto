const LottoNumbersValidator = require('../LottoNumbersValidator/LottoNumbersValidator');
const LottoResult = require('../LottoResult/LottoResult');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    LottoNumbersValidator.execute(numbers);
  }

  compareTo(winningNumbers, bonusNumber) {
    return new LottoResult(
      this.#getMatchedNumberCount(winningNumbers),
      this.#isBonusNumberMatched(bonusNumber)
    );
  }

  #getMatchedNumberCount(winningNumbers) {
    return winningNumbers.filter((winningNumber) => this.#numbers.includes(winningNumber)).length;
  }

  #isBonusNumberMatched(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }
}

module.exports = Lotto;
