const {
  checkLottoRange,
  checkDuplicate,
  checkLength,
  checkNumberRange,
  checkBonusNumberDuplicate,
} = require('./LottoValidation');

class Lotto {
  #numbers;

  constructor(winningNumber, bonusNumber) {
    const winning = winningNumber.map((number) => Number(number));
    const bonus = Number(bonusNumber);
    Lotto.validate(winning, bonus);
    this.#numbers = { winning, bonus };
  }

  static validate(winningNumber, bonusNumber) {
    checkLottoRange(winningNumber);
    checkNumberRange(bonusNumber);
    checkLength(winningNumber);
    checkDuplicate(winningNumber);
    checkBonusNumberDuplicate(bonusNumber, winningNumber);
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
