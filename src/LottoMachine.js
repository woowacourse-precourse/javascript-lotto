const { Random } = require('@woowacourse/mission-utils');

class LottoMachine {
  lottoTicketsCount;
  userBuyedTickets;

  constructor(budget) {
    this.lottoTicketsCount = budget / 1000;
    this.userBuyedTickets = this.makeLottoTickets(this.lottoTicketsCount);
  }

  pushNumberInTickets(lottoTicket) {
    const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    lottoNumbers.sort((a, b) => a - b);

    lottoTicket.push(lottoNumbers);
    return lottoTicket;
  }

  makeLottoTickets(number) {
    return [...Array(number)].reduce(this.pushNumberInTickets, []);
  }
}

module.exports = LottoMachine;
