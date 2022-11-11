const {
  createLotteryTicket,
  printMyLotteries,
} = require('./utils/lotteryHandler');

class User {
  constructor() {
    this.money = 0;
    this.ticketAmount = 0;
    this.tickets = [];
  }

  buyTickets(moneyInput) {
    this.money = Number(moneyInput);
    this.calculateTicketsAmount();
    this.getTickets();
  }

  calculateTicketsAmount() {
    this.ticketAmount = Number(this.money) / 1000;
  }

  getTickets() {
    while (this.ticketAmount >= this.tickets.length + 1) {
      const newTicket = createLotteryTicket();
      this.tickets.push(newTicket);
    }

    printMyLotteries(this.tickets);
  }
}

module.exports = User;
