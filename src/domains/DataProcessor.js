class DataProcessor {
  static convertStringToNumber(string) {
    return parseInt(string, 10);
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
}

module.exports = DataProcessor;
