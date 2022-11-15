const Validator = require('./Vaildator');

class Bonus {
  #bonusNumber;

  constructor(bonusNumber, winningNumbers) {
    this.validator = new Validator(bonusNumber).bonusNumber(winningNumbers);
    this.#bonusNumber = bonusNumber;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

module.exports = Bonus;
