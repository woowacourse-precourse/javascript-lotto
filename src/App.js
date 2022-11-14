const TicketPublisher = require('./domain/TicketPublisher');
const Casher = require('./domain/Casher');
const { CASHER } = require('./constants');
class App {
  tickets;

  constructor() {
    this.tickets = [];
  }

  play() {
  }

  purchaseRoutine(purchaseAmount) {
    const ticketQuantity = Casher.getPurchasableQuantity(purchaseAmount);
    Casher.noticePurchasedQuantity(ticketQuantity);
    this.tickets = TicketPublisher.publishTickets(ticketQuantity);
    TicketPublisher.showTickets(this.tickets);

  }
}

module.exports = App;
