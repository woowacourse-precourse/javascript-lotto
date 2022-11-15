const { checkBonusNumberDuplicate, checkNumberRange } = require('./LottoValidation');

class LottoBonus {
  #number;

  constructor(number, winningNumbers) {
    LottoBonus.validate(number, winningNumbers);
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

module.exports = LottoBonus;
