const DataProcessor = require('../domains/DataProcessor');

class WinningNumber {
  #data = {};

  registerSixNumbers(sixNumbers) {
    this.#data.sixNumbers = DataProcessor.processRowDataOfSixNumbers(sixNumbers);
  }

  registerBonus(bonus) {
    this.#data.bonus = DataProcessor.processRowDataOfBonus(bonus, this.#data.sixNumbers);
  }
}

module.exports = WinningNumber;
