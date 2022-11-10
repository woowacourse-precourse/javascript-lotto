const { Console } = require('@woowacourse/mission-utils');
const { Random } = require('@woowacourse/mission-utils');
const { sortLotteryNumbers } = require('./utils/lotteryHandler');

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
      const newTicket = this.createLotteryTicket();
      this.tickets.push(newTicket);
    }

    Console.print(`${this.ticketAmount}개를 구매했습니다.`);
    console.log(this.tickets);
  }

  createLotteryTicket() {
    const lotteryTicket = Random.pickUniqueNumbersInRange(1, 45, 6);
    const sortedLotteryTicket = sortLotteryNumbers(lotteryTicket);

    return sortedLotteryTicket;
  }
}

module.exports = User;
