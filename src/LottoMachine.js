const { Console, Random } = require("@woowacourse/mission-utils");

class LottoMachine {
  ticketNumber;
  tickets;

  constructor(budget) {
    this.ticketNumber = budget / 1000;
    this.tickets = this.makeLottoTicket(this.ticketNumber);
    this.printTickets(this.ticketNumber, this.tickets);
  }
  pushTicket(acc) {
    acc.push(Random.pickUniqueNumbersInRange(1, 45, 6));
    return acc;
  }
  makeLottoTicket = (number) => {
    return [...Array(number)].reduce(this.pushTicket, []);
  };

  printTickets(number, tickets) {
    Console.print(`${number}를 구매했습니다.`);
    tickets.forEach((ticket) => {
      Console.print(ticket);
    });
  }
}

module.exports = LottoMachine;
