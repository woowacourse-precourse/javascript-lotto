const BonusChecker = require('../services/BonusChecker');

class Bonus {
  #bonus;

  constructor(rowDataOfBonus, sixNumbers) {
    BonusChecker.checkRowDataOfBonus(rowDataOfBonus);
    this.#bonus = parseInt(rowDataOfBonus, 10);
    BonusChecker.checkBonus(this.#bonus, sixNumbers);
  }

  getBonus() {
    return this.#bonus;
  }
}

module.exports = Bonus;
