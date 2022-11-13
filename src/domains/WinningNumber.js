const DataProcessor = require('./DataProcessor');
const DataChecker = require('./DataChecker');
const Ticket = require('./Ticket');

class WinningNumber {
  #data = {};

  registerSixNumbers(rowData) {
    DataChecker.isValidRowDataOfSixNumbers(rowData);
    const sixNumbers = Ticket.sortByAscendingNumber(this.#makeNumberArray(rowData));
    DataChecker.isValidSixNumbers(sixNumbers);

    this.#data.sixNumbers = sixNumbers;
  }

  #makeNumberArray(rowData) {
    return rowData.split(',').map(Number);
  }

  registerBonus(rowData) {
    DataChecker.isValidRowDataOfBonus(rowData);
    const bonus = DataProcessor.convertStringToNumber(rowData);
    DataChecker.isValidBonus(bonus, this.#data.sixNumbers);

    this.#data.bonus = bonus;
  }

  getSixNumbers() {
    return [...this.#data.sixNumbers];
  }

  getBonus() {
    return this.#data.bonus;
  }
}

module.exports = WinningNumber;
