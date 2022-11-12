const DataChecker = require('./DataChecker');
const Ticket = require('../Ticket');

class DataProcessor {
  static processRowDataOfPurchaseAmount(rowData) {
    DataChecker.isValidRowDataOfPurchaseAmount(rowData);
    const purchaseAmount = DataProcessor.#convertStringToNumber(rowData);
    DataChecker.isValidPurchaseAmount(purchaseAmount);

    return purchaseAmount;
  }

  static #convertStringToNumber(string) {
    return parseInt(string, 10);
  }

  static getQuantityOfLotto(price) {
    return Math.floor(price / 1000);
  }

  static convertLottosToPrintableLottos(lottos) {
    let printableLottos = '';

    lottos.forEach((ticket, i) => {
      const printableTicket = DataProcessor.#getPrintableTicket([ticket, i, lottos.length]);
      printableLottos = printableLottos.concat(printableTicket);
    });

    return printableLottos;
  }

  static #getPrintableTicket([ticket, i, length]) {
    return DataProcessor.#isEndOfArray(i, length)
      ? DataProcessor.#createPrintableTicket(ticket)
      : DataProcessor.#createPrintableTicketWithNewLine(ticket);
  }

  static #isEndOfArray(i, length) {
    return i === length - 1;
  }

  static #createPrintableTicket(ticket) {
    return `[${ticket.join(', ')}]`;
  }

  static #createPrintableTicketWithNewLine(ticket) {
    return `[${ticket.join(', ')}]\n`;
  }

  static processRowDataOfSixNumbers(rowData) {
    DataChecker.isValidRowDataOfSixNumbers(rowData);
    const sixNumbers = Ticket.sortByAscendingNumber(DataProcessor.#makeNumberArray(rowData));
    DataChecker.isValidSixNumbers(sixNumbers);

    return sixNumbers;
  }

  static #makeNumberArray(rowData) {
    return rowData.split(',').map(Number);
  }

  static processRowDataOfBonus(rowData, sixNumbers) {
    DataChecker.isValidRowDataOfBonus(rowData);
    const bonus = DataProcessor.#convertStringToNumber(rowData);
    DataChecker.isValidBonus(bonus, sixNumbers);

    return bonus;
  }
}

module.exports = DataProcessor;
