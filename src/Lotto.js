const Validator = require('./Validator');

class Lotto {
  #numbers;

  constructor(numbers) {
    Validator.validateLottoNumbers(numbers);
    this.#numbers = numbers.map(Number);
  }

  getLottoNumbers() {
    return this.#numbers;
  }

  getMatchCount(winningLottoNumbers) {
    return winningLottoNumbers.reduce(
      (acc, cur) => (this.#numbers.includes(cur) ? acc + 1 : acc),
      0
    );
  }

  hasBonusNumber(winningLottoBonusNumber) {
    return this.#numbers.includes(winningLottoBonusNumber);
  }
}

module.exports = Lotto;
