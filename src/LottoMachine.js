const { Random } = require("@woowacourse/mission-utils");

class LottoMachine {
  ticketNumber;
  tickets;

  constructor(budget) {
    this.ticketNumber = budget / 1000;
    this.tickets = this.makeLottoTicket(this.ticketNumber);
  }
  pushTicket(acc) {
    acc.push(Random.pickUniqueNumbersInRange(1, 45, 6));
    return acc;
  }
  makeLottoTicket = (number) => {
    return [...Array(number)].reduce(this.pushTicket, []);
  };
}

module.exports = LottoMachine;
