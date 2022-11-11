const MissionUtils = require("@woowacourse/mission-utils");
class Generator {
  constructor() {}

  generateLottoNumbers(money) {
    const lottoTicketCount = money / 1000;
    const lottoTicket = [];

    for (let i = 0; i < lottoTicketCount; i++) {
      const lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);

      lottoNumber.sort((a, b) => a - b);
      lottoTicket.push(lottoNumber);
    }
    return lottoTicket;
  }

  generateLottoResult(lottoNumbers, lottoTicket) {
    const atLeastWinNumber = 3;
    const needToCheckBonus = 5;
    const lottoResult = {
      6: 0,
      5: 0,
      4: 0,
      3: 0,
    };

    lottoTicket.forEach((ticketNumber) => {
      const matchingNumber = this.countMatchNumber(lottoNumbers, ticketNumber);
      if (needToCheckBonus === matchingNumber) {
        lottoResult[matchingNumber] = ticketNumber;
      }
      if (atLeastWinNumber <= matchingNumber && needToCheckBonus !== matchingNumber) {
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
