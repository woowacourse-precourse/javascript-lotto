const { validate, areWinningNumbers, isBonusNumber } = require('./Validator');

class LottoGame {
  #winningNumbers = [];

  #bonusNumber = 0;

  setWinningNumbers(numbers) {
    validate(numbers, areWinningNumbers);
    this.#winningNumbers = numbers.split(',').map(Number);
  }

  setBonusNumber(number) {
    validate(number, isBonusNumber(this.#winningNumbers));
    this.#bonusNumber = Number(number);
  }
}

module.exports = LottoGame;
