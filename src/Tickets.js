const Ticket = require('./Ticket');

class Tickets {
  static publish(lottoNumber) {
    let lottoTickets = [];

    for (let i = 0; i < lottoNumber; i++) {
      lottoTickets = Tickets.get(lottoTickets, Ticket.sortLottoNumber(Ticket.get()));
      lottoTickets = Tickets.removeDuplicatedLotto(lottoTickets);
    }

    return lottoTickets;
  }

  static get(lottos, ticket) {
    return [...lottos, ticket];
  }

  static removeDuplicatedLotto(lottos) {
    const set = new Set(lottos);

    return [...set];
  }
}

module.exports = Tickets;
