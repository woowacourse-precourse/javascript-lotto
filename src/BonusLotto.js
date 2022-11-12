const { checkBonusNumberDuplicate, checkNumberRange } = require('./LottoValidation');

class BonusLotto {
  #number;

  constructor(number, winningNumbers) {
    BonusLotto.validate(number, winningNumbers);
    this.#number = number;
  }

  static validate(number, winningNumbers) {
    checkNumberRange(number);
    checkBonusNumberDuplicate(number, winningNumbers);
  }

  getNumber() {
    return this.#number;
  }
}

module.exports = BonusLotto;
