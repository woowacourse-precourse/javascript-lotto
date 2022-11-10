const { Console } = require('@woowacourse/mission-utils');

class User {
  constructor() {
    this.number = {};
    this.money = 0;
    this.ticketAmount = 0;
  }

  buyTickets(moneyInput) {
    this.money = Number(moneyInput);
    this.calculateTicketsAmount();
    Console.print(`${this.ticketAmount}개를 구매했습니다.`);
  }

  calculateTicketsAmount() {
    this.ticketAmount = Number(this.money) / 1000;
  }
}

module.exports = User;
