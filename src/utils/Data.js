const Checker = require('../Checker');

class Data {
  static makeUsablePrice(priceString) {
    Checker.isValidPriceString(priceString);
    const price = Data.convertStringToNumber(priceString);
    Checker.isValidPrice(price);

    return price;
  }

  static convertStringToNumber(string) {
    return parseInt(string, 10);
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
}

module.exports = Data;
