const DataProcessor = require('./utils/DataProcessor');

class WinningNumber {
  #data = {
    sixNumbers: 0,
    bonus: 0,
  };

  registerSixNumbers(sixNumbers) {
    this.#data.sixNumbers = DataProcessor.processRowDataOfSixNumbers(sixNumbers);
  }

  registerBonus(bonus) {
    this.#data.bonus = DataProcessor.processRowDataOfBonus(bonus, this.#data.sixNumbers);
  }
}

module.exports = WinningNumber;
