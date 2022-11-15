const BonusValidator = require("../validator/BonusValidator");

class Bonus {
  #bonus;

  constructor(bonus, winNumbers) {
    this.validate(bonus, winNumbers.getWinNumbers());
    this.#bonus = bonus;
  }

  validate(bonus, winNumbersArr) {
    const bonusValidator = new BonusValidator(bonus, winNumbersArr);
  }

  getBonusNumber() {
    return this.#bonus;
  }
}

module.exports = Bonus;
