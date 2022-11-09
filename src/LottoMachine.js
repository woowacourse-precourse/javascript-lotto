const { Random } = require("@woowacourse/mission-utils");

class LottoMachine {
  ticketNumber;
  tickets;

  constructor(budget) {
    this.ticketNumber = budget;
    this.tickets = this.makeLottoTicket();
  }

  makeLottoTicket = () => {
    return Random.pickUniqueNumberInRange(1, 45, 6);
  };
}

module.exports = LottoMachine;
