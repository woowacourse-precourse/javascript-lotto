const Input = require('./Input');
const BonusValidation = require('./Validation/BonusValidation');

class Bonus extends Input {
  #bonusNumber = 0;

  constructor(answer, winNumberList) {
    super(answer);
    Bonus.validate(answer, winNumberList);
    this.save(answer);
  }

  static validate(answer, winNumberList) {
    const bonusValidation = new BonusValidation(answer, winNumberList);
    return bonusValidation.validate();
  }

  save(answer) {
    this.#bonusNumber = Number(answer);
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

module.exports = Bonus;
