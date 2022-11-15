const MissionUtils = require("@woowacourse/mission-utils");

class Ticket {
  constructor(spendMoney) {
    this.count = spendMoney / 1000;
    this.number = this.getTicket();
  }

  getTicket() {
    const lottoTicket = [];

    for (let i = 0; i < this.count; i++) {
      const lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);

      lottoNumber.sort((a, b) => a - b);
      lottoTicket.push(lottoNumber);
    }

    return lottoTicket;
  }
}

module.exports = Ticket;
