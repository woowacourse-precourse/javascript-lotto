const { Random } = require('@woowacourse/mission-utils');
const { Console } = require('@woowacourse/mission-utils');

class LottoMachine {
  lottoTicketsCount;
  userBuyedTickets;

  constructor(budget) {
    this.lottoTicketsCount = budget / 1000;
    this.userBuyedTickets = this.makeLottoTickets(this.lottoTicketsCount);
    this.printBuyedLottoResult(this.lottoTicketsCount, this.userBuyedTickets);
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

  printBuyedLottoResult(ticketsCount, userBuyedTickets) {
    this.printTicketsCount(ticketsCount);
    this.printLottoNumberInTickets(userBuyedTickets);
  }

  printTicketsCount(ticketsCount) {
    Console.print(`${ticketsCount}개를 구매했습니다.`);
  }

  solveNumbersInArray(ticket) {
    return `[${ticket.join(', ')}]`;
  }

  printLottoNumberInTickets(userBuyedTickets) {
    const NumbersInTickets = userBuyedTickets.map((ticket) => {
      return this.solveNumbersInArray(ticket);
    });
    NumbersInTickets.forEach((ticket) => Console.print(ticket));
  }
}

module.exports = LottoMachine;
