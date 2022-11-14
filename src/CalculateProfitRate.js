const { MONEY } = require('./utiles/Constant');

class CalculateProfitRate {
  getWinningMoney(winLottosCount) {
    return Object.values(winLottosCount).reduce(
      (totalProfit, winLottoCount, i) => {
        const moneyWithFormat = Object.values(MONEY)[i];
        const winningMoney = this.removeMoneyFormat(moneyWithFormat);
        return (totalProfit += winningMoney * winLottoCount);
      },
      0
    );
  }

  removeMoneyFormat(moneyWithFormat) {
    return moneyWithFormat.split(/원|,/).join('');
  }

  getProfitRate(money, winLottosCount) {
    const winningMoney = this.getWinningMoney(winLottosCount);
    return parseFloat(((winningMoney / money) * 100).toFixed(2));
  }
}

module.exports = CalculateProfitRate;
