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
}

module.exports = Generator;
