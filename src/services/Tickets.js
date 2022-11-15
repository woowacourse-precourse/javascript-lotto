const Ticket = require('./Ticket');

class Tickets {
  static publish(lottoQuantity) {
    let lottoTickets = [];

    for (let i = 0; i < lottoQuantity; i++) {
      lottoTickets = Tickets.#addTicketInLottoTickets(lottoTickets);
      lottoTickets = Tickets.#removeDuplicatedTicket(lottoTickets);
    }

    return lottoTickets;
  }

  static #addTicketInLottoTickets(lottos) {
    return [...lottos, Ticket.sortByAscendingNumber(Ticket.getTicket())];
  }

  static #removeDuplicatedTicket(lottos) {
    return [...new Set(lottos)];
  }
}

module.exports = Tickets;
