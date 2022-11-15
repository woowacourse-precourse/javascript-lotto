const { PRIZE_MONEY, A_LOTTO_PRICE } = require('./constants.js');
const MIN_MATCH_NUMBER = 3;

class WinningResult {
  constructor(winningNumberList, bunusNumber, lottoTicketList) {
    this.winningNumberList = winningNumberList.map(Number);
    this.bunusNumber = Number(bunusNumber);
    this.lottoTicketList = lottoTicketList;
    this.numberByMatching = {
      3: 0,
      4: 0,
      5: 0,
      '5+1': 0,
      6: 0,
    };
    this.setNumberByMatching();
    this.getProfitRate();
  }

  setNumberByMatching() {
    this.lottoTicketList.forEach((ticket) => {
      const matchNumber = ticket.filter((number) => {
        return this.winningNumberList.includes(number);
      }).length;
      if (matchNumber === 5 && ticket.includes(this.bunusNumber)) {
        this.numberByMatching['5+1'] += 1;
        return 0;
      }
      if (matchNumber >= MIN_MATCH_NUMBER) {
        this.numberByMatching[matchNumber] += 1;
      }
    });
  }

  getNumberByMatchingKey() {
    return Object.keys(this.numberByMatching);
  }

  getProfitRate() {
    const totalPrizeMoney = this.getNumberByMatchingKey().reduce((prizeMoney, key) => {
      prizeMoney += this.numberByMatching[key] * PRIZE_MONEY[key];
      return prizeMoney;
    }, 0);
    const profitRate = (totalPrizeMoney * 100) / (this.lottoTicketList.length * A_LOTTO_PRICE);
    return profitRate.toFixed(1);
  }
}

module.exports = WinningResult;
