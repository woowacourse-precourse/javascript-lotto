const BonusValidator = require("../validator/BonusValidator");

class Bonus {
  #bonus;

  constructor(bonus, winNumbers) {
    this.validate(bonus, winNumbers);
    this.#bonus = bonus;
  }

  validate(bonus, winNumbers) {
    const bonusValidator = new BonusValidator(bonus, winNumbers);
  }
}

module.exports = Bonus;
