const MissionUtils = require("@woowacourse/mission-utils");
const Print = require("./Print.js");

class Generator {
  constructor() {
    this.print = new Print();
  }

  generateLottoNumbers(money) {
    const lottoTicketCount = money / 1000;
    const lottoTicket = [];

    for (let i = 0; i < lottoTicketCount; i++) {
      const lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);

      lottoNumber.sort((a, b) => a - b);
      lottoTicket.push(lottoNumber);
    }

    MissionUtils.Console.print(`${lottoTicketCount}개를 구매했습니다.`);
    this.print.printLottoTicket(lottoTicket);
    return lottoTicket;
  }

  generateMatchingResult(lottoNumbers, lottoTicket) {
    const atLeastMatchNumber = 3;
    const needToCheckBonus = 5;
    const lottoResult = {
      3: 0,
      4: 0,
      5: 0,
      6: 0,
    };

    lottoTicket.forEach((ticketNumber) => {
      const matchingNumber = this.countMatchNumber(lottoNumbers, ticketNumber);
      if (needToCheckBonus === matchingNumber) {
        lottoResult[matchingNumber] = ticketNumber;
      }
      if (atLeastMatchNumber <= matchingNumber && needToCheckBonus !== matchingNumber) {
        lottoResult[matchingNumber] += 1;
      }
    });

    return lottoResult;
  }

  countMatchNumber(lottoNumber, ticketNumber) {
    let matchingCount = 0;
    for (let i = 0; i < lottoNumber.length; i++) {
      if (ticketNumber.includes(lottoNumber[i])) {
        matchingCount++;
      }
    }
    return matchingCount;
  }
}

module.exports = Generator;
