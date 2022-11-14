const Lotto = require('../Lotto');
const { LOTTO } = require('../constants');
const { Random } = require('@woowacourse/mission-utils');
const Io = require('../infrastructure/io');

class TicketPublisher {
  static publishTickets(quantity) {
    const tickets = [];
    for (let current = 0; current < quantity; current++) {
      const ticketNumbers = TicketPublisher.generateTicket();
      tickets.push(new Lotto(ticketNumbers));
    }
    return tickets;
  }

  static generateTicket() {
    return Random.pickUniqueNumbersInRange(
      LOTTO.MIN_NUMBER,
      LOTTO.MAX_NUMBER,
      LOTTO.NUMBER_COUNT,
    );
  }

  static showTickets(tickets) {
    tickets.forEach((ticket) => {
      Io.output(ticket.toString());
    });
  }
}

module.exports = TicketPublisher;
