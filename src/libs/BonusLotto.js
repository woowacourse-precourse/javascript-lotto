const { isCommaBonus, isOverlapBonus, isRangeBonus } = require('./Validations');

class BonusLotto {
  #bonusNumber;

  constructor(prizeNumber, userInput) {
    this.validate(prizeNumber, userInput);
    this.#bonusNumber = Number(userInput);
  }

  validate(prizeNumber, userInput) {
    const number = Number(userInput);
    isCommaBonus(userInput);
    isOverlapBonus(prizeNumber, number);
    isRangeBonus(number);
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

module.exports = BonusLotto;
