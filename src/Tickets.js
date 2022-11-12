const Ticket = require('./Ticket');

class Tickets {
  static publish(lottoQuantity) {
    let lottoTickets = [];

    for (let i = 0; i < lottoQuantity; i++) {
      lottoTickets = Tickets.#get(lottoTickets, Ticket.sortByAscendingNumber(Ticket.get()));
      lottoTickets = Tickets.#removeDuplicatedLotto(lottoTickets);
    }

    return lottoTickets;
  }

  static #get(lottos, ticket) {
    return [...lottos, ticket];
  }

  static #removeDuplicatedLotto(lottos) {
    const set = new Set(lottos);

    return [...set];
  }
}

module.exports = Tickets;
