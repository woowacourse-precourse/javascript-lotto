const { Console, Random } = require("@woowacourse/mission-utils");

class LottoMachine {
  ticketNumber;
  tickets;

  constructor(budget) {
    this.ticketNumber = budget / 1000;
    this.tickets = this.makeLottoTicket(this.ticketNumber);
    this.printResultIssuedLottoTickets(this.ticketNumber, this.tickets);
  }
  pushTicket(acc) {
    const newTicket = Random.pickUniqueNumbersInRange(1, 45, 6);
    newTicket.sort((a, b) => a - b);
    acc.push(newTicket);
    return acc;
  }
  makeLottoTicket(number) {
    return [...Array(number)].reduce(this.pushTicket, []);
  }

  printTicketNumber(number) {
    Console.print(`${number}개를 구매했습니다.`);
  }

  makePrintArrayFormat(array) {
    return `[${array.join(", ")}]`;
  }

  printEachTicket(tickets) {
    const formattedTickets = tickets.map((ticket) =>
      this.makePrintArrayFormat(ticket)
    );
    formattedTickets.forEach((ticket) => Console.print(ticket));
  }

  printResultIssuedLottoTickets(number, tickets) {
    this.printTicketNumber(number);
    this.printEachTicket(tickets);
  }
}

module.exports = LottoMachine;
