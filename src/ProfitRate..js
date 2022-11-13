class ProfitRate {
  constructor(lottoResult, payMoney) {
    this.lottoResult = lottoResult;
    this.payMoney = payMoney;
  }

  getProfitRate() {
    const totalPrizeMoney = this.sumTotalPrizeMoney(this.lottoResult);
    return this.calculateProfitRate(totalPrizeMoney, this.payMoney);
  }

  calculateProfitRate(totalPrizeMoney, payMoney) {
    return ((Math.round((totalPrizeMoney / payMoney) * 1000) / 1000) * 100).toFixed(1);
  }

  sumTotalPrizeMoney(lottoResult) {
    return this.getPrizeMoney(lottoResult).reduce((totalMoney, prizeMoney) => {
      return (totalMoney += prizeMoney);
    }, 0);
  }

  getPrizeMoney(lottoResult) {
    const currency = [5000, 50000, 1500000, 30000000, 2000000000];
    const prizeMoney = lottoResult.map((lotto, index) => {
      if (lotto !== 0) return lotto * currency[index];
    });
    return prizeMoney.filter((money) => money !== undefined);
  }
}
module.exports = ProfitRate;
