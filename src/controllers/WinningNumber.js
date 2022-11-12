const DataProcessor = require('../domains/DataProcessor');

class WinningNumber {
  #data = {};

  registerSixNumbers(sixNumbers) {
    this.#data.sixNumbers = DataProcessor.processRowDataOfSixNumbers(sixNumbers);
  }

  registerBonus(bonus) {
    this.#data.bonus = DataProcessor.processRowDataOfBonus(bonus, this.#data.sixNumbers);
  }

  getSixNumbers() {
    return [...this.#data.sixNumbers];
  }

  getBonus() {
    return this.#data.bonus;
  }
}

module.exports = WinningNumber;
