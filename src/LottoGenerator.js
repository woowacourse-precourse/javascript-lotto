const { Console, Random } = require("@woowacourse/mission-utils");

class LottoGenerator {
  ticketLists;
  tickets;
  constructor(ticketAmount) {
    this.ticketLists = this.generateLottoNumber(Number(ticketAmount));
    this.printTicketAmount(ticketAmount);
    this.tickets = this.sortAscending(this.ticketLists);
    this.printTicketList(this.tickets);
  }

  generateLottoNumber(ticketNumber) {
    let ticketArray = [];
    for (let count = 0; count < ticketNumber; count += 1) {
      ticketArray.push(Random.pickUniqueNumbersInRange(1, 45, 6));
    }
    return ticketArray;
  }

  printTicketAmount(ticket) {
    Console.print(`${ticket}개를 구매했습니다.`);
  }

  printTicketList(tickets) {
    const newList = tickets.map((ticket) => `[${ticket.join(", ")}]`);
    newList.forEach((ticket) => Console.print(ticket));
  }

  sortAscending(ticketList) {
    return ticketList.map((ticket) => ticket.sort((a, b) => a - b));
  }
}
module.exports = LottoGenerator;
