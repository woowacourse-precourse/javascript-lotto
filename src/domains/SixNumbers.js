const SixNumbersChecker = require('../services/SixNumbersChecker');
const Ticket = require('../services/Ticket');

class SixNumbers {
  #sixNumbers;

  constructor(rowDataOfSixNumber) {
    SixNumbersChecker.checkRowDataOfSixNumbers(rowDataOfSixNumber);
    this.#sixNumbers = Ticket.sortByAscendingNumber(this.#makeNumberArray(rowDataOfSixNumber));
    SixNumbersChecker.checkSixNumbers(this.#sixNumbers);
  }

  #makeNumberArray(rowDataOfSixNumber) {
    return rowDataOfSixNumber.split(',').map(Number);
  }

  getSixNumbers() {
    return [...this.#sixNumbers];
  }
}

module.exports = SixNumbers;
