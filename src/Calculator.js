const { LOTTO_PRIZE, LOTTO } = require('./Constants');

class Calculator {
  ofPurchaseLottoCount(moneyValue) {
    return Number(moneyValue / LOTTO.PRICE);
  }

  matchNumberCount(winNumbers, userPurchaselotto) {
    const matchNumbers = winNumbers.filter(number => userPurchaselotto.includes(number));
    const matchCount = matchNumbers.length;
    return matchCount;
  }

  profit(lottoResultMap) {
    return Object.entries(lottoResultMap).reduce((accemulateProfit, [grade, count]) => {
      return accemulateProfit + LOTTO_PRIZE[grade] * count;
    }, 0);
  }

  profitRate(totalProfit, money) {
    return Number(((totalProfit / money) * 100).toFixed(1));
  }
}

module.exports = Calculator;
