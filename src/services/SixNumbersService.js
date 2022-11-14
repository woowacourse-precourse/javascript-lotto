const SixNumbersChecker = require('./SixNumbersChecker');
const Ticket = require('./Ticket');

class SixNumbersService {
  static setSixNumbers(rowDataOfSixNumber) {
    SixNumbersChecker.checkRowDataOfSixNumbers(rowDataOfSixNumber);
    const sixNumbers = Ticket.sortByAscendingNumber(this.#makeNumberArray(rowDataOfSixNumber));
    SixNumbersChecker.checkSixNumbers(sixNumbers);

    return sixNumbers;
  }

  static #makeNumberArray(rowDataOfSixNumber) {
    return rowDataOfSixNumber.split(',').map(Number);
  }
}

module.exports = SixNumbersService;
