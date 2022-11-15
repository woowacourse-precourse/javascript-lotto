class PrintableLottos {
  static convert(lottos) {
    return lottos.map(ticket => PrintableLottos.#createPrintableTicket(ticket)).join('\n');
  }

  static #createPrintableTicket(ticket) {
    return `[${ticket.join(', ')}]`;
  }
}

module.exports = PrintableLottos;
