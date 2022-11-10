class User {
  constructor() {
    this.number = {};
    this.money = 0;
    this.ticketAmount = 0;
  }

  buyTickets(moneyInput) {
    this.money = Number(moneyInput);
    this.calculateTicketsAmount();
  }

  calculateTicketsAmount() {
    this.ticketAmount = Number(this.money) / 1000;
  }
}

module.exports = User;
