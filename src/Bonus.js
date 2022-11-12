const BonusValidation = require('./Validation/BonusValidation');

class Bonus {
  #bonusNumber = 0;

  constructor(answer, winNumberList) {
    Bonus.validate(answer, winNumberList);
    this.saveBonusNumber(answer);
  }

  static validate(answer, winNumberList) {
    const bonusValidation = new BonusValidation(answer, winNumberList);
    return bonusValidation.validate();
  }

  saveBonusNumber(answer) {
    this.#bonusNumber = Number(answer);
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

module.exports = Bonus;
