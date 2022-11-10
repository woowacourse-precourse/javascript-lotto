const { Console } = require('@woowacourse/mission-utils');
const { createLotteryTicket } = require('./utils/lotteryHandler');

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

    Console.print(`${this.ticketAmount}개를 구매했습니다.`);
    console.log(this.tickets);
  }
}

module.exports = User;
