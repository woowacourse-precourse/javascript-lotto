const Checker = require('../Checker');
const Ticket = require('../Ticket');

class Data {
  static makeUsablePrice(priceString) {
    Checker.isValidPriceString(priceString);
    const price = parseInt(priceString, 10);
    Checker.isValidPrice(price);

    return price;
  }

  static getLottoNumber(price) {
    return Math.floor(price / 1000);
  }

  static convertLottosToPrintableLottos(lottos) {
    let printableLottos = '';

    lottos.forEach((ticket, i) => {
      const printableTicket = Data.#getPrintableTicket([ticket, i, lottos.length]);
      printableLottos = printableLottos.concat(printableTicket);
    });

    return printableLottos;
  }

  static #getPrintableTicket([ticket, i, length]) {
    return Data.#isEndOfArray(i, length)
      ? Data.#createPrintableTicket(ticket)
      : Data.#createPrintableTicketWithNewLine(ticket);
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

  static makeUsableSixNumbers(sixNumbersString) {
    Checker.isValidSixNumbersString(sixNumbersString);
    const sixNumbers = Ticket.sortByAscendingNumber(sixNumbersString.split(',').map(Number));
    Checker.isValidSixNumbers(sixNumbers);
  }
}

module.exports = Data;
