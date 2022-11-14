const { PRIZE_MONEY_CURRENCY } = require('../constants');

class ProfitRate {
  constructor(lottoResult, payMoney) {
    this.lottoResult = lottoResult;
    this.payMoney = payMoney;
  }

  getProfitRate() {
    const totalPrizeMoney = this.sumTotalPrizeMoney(this.lottoResult);
    return this.calculateProfitRate(totalPrizeMoney, this.payMoney).toLocaleString('ko-KR');
  }

  calculateProfitRate(totalPrizeMoney, payMoney) {
    return Number(((((totalPrizeMoney / payMoney) * 1000) / 1000) * 100).toFixed(1));
  }

  sumTotalPrizeMoney(lottoResult) {
    return this.getPrizeMoney(lottoResult).reduce((totalMoney, prizeMoney) => {
      return (totalMoney += prizeMoney);
    }, 0);
  }

  getPrizeMoney(lottoResult) {
    const currency = [
      PRIZE_MONEY_CURRENCY.fifth,
      PRIZE_MONEY_CURRENCY.foutrh,
      PRIZE_MONEY_CURRENCY.third,
      PRIZE_MONEY_CURRENCY.second,
      PRIZE_MONEY_CURRENCY.first,
    ];

    const prizeMoney = lottoResult.map((lotto, index) => {
      if (lotto !== 0) return lotto * currency[index];
    });

    return prizeMoney.filter((money) => money !== undefined);
  }
}
module.exports = ProfitRate;
