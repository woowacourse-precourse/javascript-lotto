const { Random } = require('@woowacourse/mission-utils');

class LottoMachine {
  lottoTicketsCount;
  lottoTickets;
  constructor(budget) {
    this.lottoTicketsCount = budget;
    this.lottoTickets = makeLottoTickets();
  }

  makeLottoTickets() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

module.exports = LottoMachine;
