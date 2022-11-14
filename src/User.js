const { createLotteryTicket, printMyLotteries } = require('./utils/lotteryHandler');
const { NUMBER } = require('./utils/constant');

class User {
  constructor() {
    this.money = NUMBER.DEFAULT_MONEY;
    this.ticketAmount = NUMBER.DEFAULT_TICKET_AMOUT;
    this.tickets = [];
  }

  buyTickets(moneyInput) {
    this.money = Number(moneyInput);
    this.calculateTicketsAmount();
    this.getTickets();
  }

  calculateTicketsAmount() {
    this.ticketAmount = Number(this.money) / NUMBER.PRICE_UNIT;
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
