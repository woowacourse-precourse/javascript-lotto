const Ticket = require('./Ticket');
const Tickets = require('./Tickets');

class Lotto {
  #numbers;

  publishPlayersTicket(lottoNumber) {
    let lottoTickets = [];

    for (let i = 0; i < lottoNumber; i++) {
      this.publishTicket();
      lottoTickets = Tickets.get(lottoTickets, this.#numbers);
      lottoTickets = Tickets.removeDuplicatedLotto(lottoTickets);
    }

    return lottoTickets;
  }

  publishTicket() {
    this.#numbers = Ticket.get();
  }
}

module.exports = Lotto;
