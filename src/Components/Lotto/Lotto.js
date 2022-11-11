const LottoNumberCount = require('../LottoNumberCount/LottoNumberCount');
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
    const matchedNumberCount = new LottoNumberCount(this.#getMatchedNumberCount(winningNumbers));
    const matchedBonusNumberCount = new LottoNumberCount(
      this.#getMatchedBonusNumberCount(bonusNumber)
    );

    return new LottoResult(matchedNumberCount, matchedBonusNumberCount);
  }

  #getMatchedNumberCount(winningNumbers) {
    return winningNumbers.filter((winningNumber) => this.#numbers.includes(winningNumber)).length;
  }

  #getMatchedBonusNumberCount(bonusNumber) {
    return Number(this.#numbers.includes(bonusNumber));
  }
}

module.exports = Lotto;
